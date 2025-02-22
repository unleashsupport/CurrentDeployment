// netlify/functions/twitterCallback.js
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Extract the authorization code from the query parameters
  const params = new URLSearchParams(event.queryStringParameters);
  const code = params.get('code');
  
  if (!code) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'No authorization code provided.' }),
    };
  }
  
  // Prepare the request to exchange the code for an access token.
  const tokenUrl = 'https://api.twitter.com/2/oauth2/token';
  const clientId = process.env.TWITTER_CLIENT_ID;
  const clientSecret = process.env.TWITTER_CLIENT_SECRET;
  const redirectUri = 'https://yourdomain.netlify.app/.netlify/functions/twitterCallback';
  
  // Build the request payload (adjust parameters based on Twitter’s documentation)
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    code: code,
    grant_type: 'authorization_code',
    redirect_uri: redirectUri,
    // If using PKCE, include code_verifier, etc.
  });
  
  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });
    
    const data = await response.json();
    
    if (data.error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: data.error }),
      };
    }
    
    // TODO: Save data.access_token (and refresh token if provided) in your database associated with the user
    // For now, we'll just return a success message
    
    return {
      statusCode: 302,
      headers: {
        Location: '/settings', // Redirect the user back to the settings page (or wherever you want)
      },
      body: '',
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error.' }),
    };
  }
};

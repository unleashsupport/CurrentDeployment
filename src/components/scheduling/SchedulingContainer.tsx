import { SchedulingHeader } from './SchedulingHeader';
import { InlineCalendar } from './InlineCalendar';

export default function SchedulingContainer() {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#111] border border-green-500/20">
      <div className="p-8 space-y-6">
        <SchedulingHeader />
        <InlineCalendar />
      </div>
    </div>
  );
}
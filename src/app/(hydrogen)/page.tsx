import FileDashboard from '../shared/file/dashboard';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject(),
};

export default function FileDashboardPage() {
  // return <FileDashboard />;/
  return (
    <div>
      <FileDashboard />
    </div>
  );
}

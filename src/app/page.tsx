import { Technologies } from '@/components/technologies';
import { WhoAmI } from '@/components/whoami';

export default function Home() {
  return (
    <main className="min-h-screen mt-10">
      <WhoAmI />
      <div className="grid grid-cols-2">
        <Technologies />
        <div></div>
      </div>
    </main>
  );
}

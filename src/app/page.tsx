import { About } from '@/components/about';
import { Technologies } from '@/components/technologies';
import { WhoAmI } from '@/components/whoami';

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
      <div className="md:sticky top-0 md:w-1/2 h-screen">
        <WhoAmI />
      </div>
      <div className="md:w-1/2">
        <About />
        <Technologies />
      </div>
    </main>
  );
}

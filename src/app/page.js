'use client';
import Oneuser from '../app/components/oneuser'
export default function Home() {

  return <main>
          <p className="text-2xl text-white">Welcome</p>
      <div className="mt-16 flex flex-col items-center">
          <Oneuser/>
      </div>
  </main>;
}

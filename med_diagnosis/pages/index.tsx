import Head from 'next/head'
import Center from '../components/Center'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>med-diagnosis</title>
        <link rel="icon" href="/diagnostic.svg" type="image/svg" />
      </Head>
      <div className="h-screen overflow-hidden bg-[#042E38]">
        <main className="flex">
          {/* sidebar */}
          <Sidebar />
          <div className="flex w-full flex-col">
            {/* header */}
            <Header />
            {/* main content */}
            <Center />
          </div>
        </main>
        <div className="sticky bottom-0">{/* palyer */}</div>
      </div>
    </div>
  )
}

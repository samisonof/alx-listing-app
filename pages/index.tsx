import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="p-4 space-y-6">
        <Card
          title="Beautiful Next.js App"
          description="A fantastic listing app built with Next.js and Tailwind CSS."
          imageUrl="public/images/apartment.jpg"
        />
        <Button text="View Listing" />
      </main>
    </>
  );
}

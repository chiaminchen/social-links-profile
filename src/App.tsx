import jessicaImage from './assets/avatar-jessica.jpeg';

interface LinksType {
  website: string;
  url: string;
}

const links: LinksType[] = [
  { website: 'GitHub', url: 'https://github.com/' },
  { website: 'Frontend Mentor', url: 'https://www.frontendmentor.io/' },
  { website: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { website: 'Twitter', url: 'https://www.twitter.com/' },
  { website: 'Instagram', url: 'https://www.instagram.com/' },
];

function App() {
  return (
    <main className="bg-gray-medium text-white w-card-fluid rounded-xl p-6 flex flex-col gap-6 items-center text-center">
      <img className="w-22 rounded-[50%]" src={jessicaImage} alt="Jessica" />
      <section>
        <h1 className="text-2xl/normal font-bold">Jessica Randall</h1>
        <p className="text-green text-sm/normal font-bold">London, United Kingdom</p>
      </section>
      <p className="text-sm/normal">"Front-end developer and avid reader."</p>
      <ul className="flex flex-col gap-4 w-full">
        {links.map(link => (
          <Link website={link.website} url={link.url} />
        ))}
      </ul>
    </main>
  );
}

function Link({ website, url }: LinksType) {
  return (
    <li>
      <a
        className="bg-gray-light hover:bg-green p-3 rounded-lg text-sm/normal font-bold  hover:text-gray-medium block transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {website}
      </a>
    </li>
  );
}

export default App;

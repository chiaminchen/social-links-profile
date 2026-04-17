import jessicaImage from './assets/avatar-jessica.jpeg';

interface SocialLinkType {
  website: string;
  url: string;
}

const links: SocialLinkType[] = [
  { website: 'GitHub', url: 'https://github.com/' },
  { website: 'Frontend Mentor', url: 'https://www.frontendmentor.io/' },
  { website: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { website: 'Twitter', url: 'https://www.twitter.com/' },
  { website: 'Instagram', url: 'https://www.instagram.com/' },
];

function App() {
  return (
    <main className="bg-gray-medium w-card-fluid flex flex-col items-center gap-6 rounded-xl p-6 text-center text-white">
      <img
        className="w-22 rounded-full"
        src={jessicaImage}
        alt="Jessica Randall"
        width={88}
        height={88}
      />
      <div>
        <h1 className="text-2xl/normal font-bold">Jessica Randall</h1>
        <p className="text-green text-sm/normal font-bold">
          London, United Kingdom
        </p>
      </div>
      <p className="text-sm/normal">"Front-end developer and avid reader."</p>
      <ul className="flex w-full flex-col gap-4">
        {links.map((link) => (
          <SocialLink
            key={link.website}
            website={link.website}
            url={link.url}
          />
        ))}
      </ul>
    </main>
  );
}

function SocialLink({ website, url }: SocialLinkType) {
  return (
    <li>
      <a
        className="bg-gray-light hover:bg-green hover:text-gray-medium focus-visible:ring-green focus-visible:ring-offset-gray-dark block rounded-lg p-3 text-sm/normal font-bold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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

import jessicaImage from './assets/avatar-jessica.jpeg';
import { SocialLink, type SocialLinkProps } from './components/SocialLink';

const links: SocialLinkProps[] = [
  { website: 'GitHub', url: 'https://github.com/' },
  { website: 'Frontend Mentor', url: 'https://www.frontendmentor.io/' },
  { website: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { website: 'Twitter', url: 'https://www.twitter.com/' },
  { website: 'Instagram', url: 'https://www.instagram.com/' },
];

function App() {
  return (
    <main>
      <article className="font-inter bg-gray-medium w-card-fluid flex flex-col items-center gap-6 rounded-xl p-6 text-center text-white">
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
      </article>
    </main>
  );
}

export default App;


import Nav from './Component/Nav';
import {
  Hero,
  Servies,
  SuperQuality,
  PopularProducts,
  Footer,
  Subscribe,
  Specialoffers,
  CustomerReviews
} from './section';
const App = () => (
  <main className='relative'>
    <Nav />
    <section className=" xl:padding-l wide:padding-r padding-b"><Hero /></section>
    <section className="padding"><PopularProducts /></section>
    <section className="padding"><SuperQuality /></section>
    <section className="padding"><Servies /></section>
    <section className="padding-x py-10"><Specialoffers /></section>
    <section className="padding bg-pale-blue first-letter"><CustomerReviews /></section>
    <section className="padding-x sm:py-32 py-16 w-full"><Subscribe /></section>
    <section className="padding padding-x padding-t pb-8 bg-black"><Footer /></section>

  </main>
);

export default App;

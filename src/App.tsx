import Navbar from './components/Navbar';
import Hero from './Hero';
import BackgroundFx from './components/BackgroundFx';
import { TickerMarquee, AboutSection, Services, StatCounters, MeterSkills, IconSkillTiles, Timeline, Education, Projects, CertGrid, Awards, Hobbies, TestimonialSection, ContactShell, BlogSection, FAQSection, EnhancedTimeline, SkillsDetailedGrid, ContactMethodsGrid, WaveDivider } from './components/Sections';
import { content } from './content';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFx />
      <Navbar content={content} />
      <Hero />
      <TickerMarquee items={content.ticker ?? [content.role, content.tagline]} />
      <AboutSection content={content} />
      <WaveDivider />
      <Services content={content} />
      <WaveDivider flip />
      <StatCounters content={content} />
      <WaveDivider />
      <MeterSkills content={content} />
      <WaveDivider flip />
      <IconSkillTiles content={content} />
      <WaveDivider />
      <SkillsDetailedGrid content={content} />
      <WaveDivider flip />
      <EnhancedTimeline content={content} />
      <WaveDivider />
      <Timeline content={content} />
      <WaveDivider flip />
      <Education content={content} />
      <WaveDivider />
      <Projects content={content} />
      <WaveDivider flip />
      <CertGrid content={content} />
      <WaveDivider />
      <Awards content={content} />
      <WaveDivider flip />
      <Hobbies content={content} />
      <WaveDivider />
      <BlogSection content={content} />
      <WaveDivider flip />
      <FAQSection content={content} />
      <WaveDivider />
      <TestimonialSection content={content} />
      <WaveDivider flip />
      <ContactMethodsGrid content={content} />
      <WaveDivider />
      <ContactShell content={content} />
    </div>
  );
}

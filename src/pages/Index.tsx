import { useState, useCallback } from "react";
import { MysteryScene } from "@/components/MysteryScene";

import sceneDiscovery from "@/assets/scene-discovery.png";
import sceneExamine from "@/assets/scene-examine.png";
import sceneEvidence from "@/assets/scene-evidence.png";
import sceneResearch from "@/assets/scene-research.png";
import sceneRevelation from "@/assets/scene-revelation.png";

const scenes = [
  {
    title: "A Mysterious Discovery",
    description:
      "You're walking along a quiet Gulf Coast beach when you spot something unusual in the sand. It's a bottlenose dolphin, washed ashore. The dolphin has passed away, but what happened to it? Let's begin the investigation...",
    factoid: "",
    image: sceneDiscovery,
    buttonText: "Examine the Dolphin",
  },
  {
    title: "Strange Markings",
    description:
      "The dolphin's skin appears to be covered in dark sticky patches with a funny smell. The dolphin doesn't appear rotten, so what could they be?",
    factoid:
      "Dolphins breath through a blowhole on their heads, and they often surface. Pollution that gets in this blowhole can lead to lung damage.",
    image: sceneExamine,
    buttonText: "Search the Waters",
  },
  {
    title: "Clues in the Ocean",
    description:
      "The water in the bay has an unusual rainbow sheen on the surface. Many local fisherman report seeing less fish than usual as well...",
    factoid:
      "Oil doesn't mix with water. Does this have anything to do with the rainbow color across the water?",
    image: sceneEvidence,
    buttonText: "Analyze the Evidence",
  },
  {
    title: "Scientific Discovery",
    description:
      "After sampling the black liquid on the dolphins, it is discovered to contain PAHs, which are chemicals that are found in oil. Could this have killed the dolphin?",
    factoid:
      "PAHs have been shown to lead to numerous diseases, and are so dangerous that the FDA doesn't allow animals containing PAHs to be eaten",
    image: sceneResearch,
    buttonText: "Reveal the Truth",
  },
  {
    title: "The Deepwater Horizon Disaster",
    description:
      "On April 20, 2010, the Deepwater Horizon oil rig exploded in the Gulf of Mexico, releasing over 200 million gallons of crude oil. This disaster killed 11 workers, and led to the long term suffering of many species in the ecosystem. The oil explosion was caused by the ignorance of many safety procedures, and the misreading of certain instruments.",
    factoid: "",
    infoBoxes: [
      {
        title: "Environmental Impact",
        content: "The oil caused widespread disaster throughout the area. First, it contaminated plankton, which led to sicknesses spreading upwards through food chains and making larger predators sick. Also, the oil caused issues with reproduction and respiration in animals like dolphins.",
      },
      {
        title: "Solutions",
        content: "Multiple solutions were attempted to clean up the oil and save the environment. This included using buoys to limit the oil spread, skimmers to manually scoop up oil with boats, and burning oil away. Additionally, dispersants were used to reduce the size of the oil droplets, but there's debate on whether they actually helped reduce the spill's effects.",
      },
      {
        title: "My Solution",
        content: "My solution to solve this issue is to reintroduce oil-eating bacteria to areas that lack it. This solution has been proven to work in some areas, and allows for a cleanup that doesn't require a massive amount of human effort or money. Additionally, these bacteria can reduce oil in areas like the sea floor that are difficult to reach otherwise. Working with organizations like the NOAA will help obtain and spread these bacteria faster and with government approval.",
      },
    ],
    image: sceneRevelation,
    buttonText: "Learn More",
  },
];

const FinalScreen = ({ onRestart }: { onRestart: () => void }) => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-b from-ocean-light/30 to-ocean-deep/20 animate-fade-in">
    <div className="max-w-3xl w-full space-y-8 text-center">
      <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground text-shadow-mystery">
        Remember & Protect
      </h1>
      
      <div className="bg-card rounded-2xl p-8 shadow-xl border border-border space-y-6">
        <p className="text-xl font-body text-card-foreground leading-relaxed">
          The Deepwater Horizon disaster reminds us how fragile our ocean ecosystems are. 
          Marine life depends on clean, healthy waters to thrive.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-coral/10 rounded-xl p-4 border border-coral/30">
            <h3 className="font-display font-bold text-2xl text-coral mb-2">200M+</h3>
            <p className="text-sm font-body text-muted-foreground">Gallons of oil spilled</p>
          </div>
          <div className="bg-primary/10 rounded-xl p-4 border border-primary/30">
            <h3 className="font-display font-bold text-2xl text-primary mb-2">87 Days</h3>
            <p className="text-sm font-body text-muted-foreground">Until well was capped</p>
          </div>
          <div className="bg-ocean-deep/10 rounded-xl p-4 border border-ocean-deep/30">
            <h3 className="font-display font-bold text-2xl text-ocean-deep mb-2">1,000+</h3>
            <p className="text-sm font-body text-muted-foreground">Miles of coastline affected</p>
          </div>
        </div>
        
        <div className="pt-4 space-y-4">
          <h3 className="font-display font-semibold text-lg text-foreground">
            How You Can Help:
          </h3>
          <ul className="text-left font-body text-muted-foreground space-y-2 max-w-md mx-auto">
            <li className="flex items-start gap-2">
              <span className="text-coral">•</span>
              Support organizations protecting marine wildlife
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral">•</span>
              Reduce your use of single-use plastics
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral">•</span>
              Learn about and advocate for clean energy
            </li>
            <li className="flex items-start gap-2">
              <span className="text-coral">•</span>
              Participate in beach and ocean cleanups
            </li>
          </ul>
        </div>
      </div>
      
      <button
        onClick={onRestart}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Start Investigation Again
      </button>
    </div>
  </div>
);

const Index = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  const handleNext = useCallback(() => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene((prev) => prev + 1);
    }
  }, [currentScene]);

  const handleRestart = useCallback(() => {
    setCurrentScene(0);
  }, []);

  if (showFinal) {
    return <FinalScreen onRestart={handleRestart} />;
  }

  const scene = scenes[currentScene];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-foam to-sand/30">
      <MysteryScene
        key={currentScene}
        sceneNumber={currentScene}
        totalScenes={scenes.length}
        title={scene.title}
        description={scene.description}
        factoid={scene.factoid}
        infoBoxes={scene.infoBoxes}
        image={scene.image}
        buttonText={scene.buttonText}
        onNext={handleNext}
        onRestart={handleRestart}
        isFinal={currentScene === scenes.length - 1}
      />
    </main>
  );
};

export default Index;

// Personal details and external links live here for easy editing.
export const profile = {
  name: 'Isabelle P. Ho',
  initials: 'KM',
  subtitle: 'Electrical engineering student · Research & aerospace systems',
  location: 'Clemson, South Carolina',
  email: '', // Add your preferred public contact email.
  linkedin: '', // e.g. https://www.linkedin.com/in/your-name/
  github: '', // e.g. https://github.com/your-handle
  resume: '', // e.g. /files/resume.pdf after adding the file.
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  context: string;
  overview: string[];
  contribution: string[];
  process: string[];
  results: string[];
  tools: string[];
  image: string; // Add real images under public/images/ and use /images/filename.jpg
  visual: 'orbit' | 'optical' | 'circuit' | 'signal';
  imageNote: string;
  status: string;
};

export const projects: Project[] = [
  {
    slug: 'spacecraft-power-budget', number: '01', title: 'Spacecraft Power Budget Simulator', shortTitle: 'Spacecraft Power',
    eyebrow: 'MODELING / SPACE SYSTEMS',
    summary: 'A MATLAB-based simulator connecting orbital geometry, spacecraft operating states, solar power generation, and battery performance.',
    context: 'Engineering internship · Spacecraft systems',
    overview: ['Developed a mission-level power budget simulation workflow to examine how spacecraft operations and orbital conditions affect available electrical power.', 'The project brings together orbit geometry, illumination, solar generation, mission loads, and battery state into a single modeling environment.'],
    contribution: ['Implemented and integrated core MATLAB simulation functions.', 'Developed a graphical interface for mission inputs and results.', 'Worked through model debugging, system behavior, and validation against test scenarios.'],
    process: ['Orbital position, sun vectors, and eclipse conditions drive generation calculations.', 'Mission-state definitions drive electrical loads and battery behavior.', 'Simulation outputs support evaluation of state of charge, voltage, and operating margins.'],
    results: ['Add a representative power versus time figure.', 'Add a validation comparison from a shareable test case.', 'Describe one concrete design tradeoff or modeling correction.'],
    tools: ['MATLAB', 'Aerospace Toolbox', 'App Designer', 'Systems modeling'],
    image: '', visual: 'orbit', imageNote: 'Replace with your simulator visualization or GUI screenshot', status: 'PROJECT CASE STUDY'
  },
  {
    slug: 'deep-space-optical-communications', number: '02', title: 'Deep-Space Optical Communications', shortTitle: 'Deep-Space Optical Comms',
    eyebrow: 'INDEPENDENT RESEARCH / OPTICAL SYSTEMS',
    summary: 'A mission-driven parametric framework for evaluating SWaP-constrained deep-space optical communication system designs.',
    context: 'Sole-author research · Accepted for SPIE Photonics West 2027',
    overview: ['Investigates coupled tradeoffs among transmit power, aperture, pointing, receiver sensitivity, data rate, and spacecraft resource limits.', 'The goal is a reusable analysis framework that connects optical-link design decisions with mission-level constraints.'],
    contribution: ['Developed the research question and system-level modeling approach independently.', 'Defined the parametric design framework and cross-mission evaluation goals.', 'Prepared and submitted the conference work as sole author.'],
    process: ['Start from mission performance objectives and spacecraft resource constraints.', 'Evaluate combinations of optical-link design parameters.', 'Identify limiting constraints and sensitivities within feasible design regions.'],
    results: ['Add one shareable parameter-sensitivity figure or trade-space plot.', 'Add a concise statement of your strongest result when ready.', 'Add the published paper or conference link when available.'],
    tools: ['System-level modeling', 'Optical link analysis', 'Parametric analysis', 'Technical writing'],
    image: '', visual: 'optical', imageNote: 'Replace with a trade-space plot or your own optical-link diagram', status: 'RESEARCH CASE STUDY'
  },
  {
    slug: 'active-cell-balancing', number: '03', title: 'Active Battery Cell Balancing', shortTitle: 'Power Electronics',
    eyebrow: 'RESEARCH / POWER ELECTRONICS',
    summary: 'Modeling an adjacent-inductor charge-transfer approach for active battery cell balancing.',
    context: 'VIPR research group · Circuit analysis and simulation',
    overview: ['Explores controlled energy transfer between neighboring battery cells using an inductor-based balancing topology.', 'Circuit modeling is used to understand switching behavior, current paths, and conditions for stopping charge transfer.'],
    contribution: ['Built and troubleshot simulated cell-balancing circuits.', 'Investigated MOSFET drive behavior, switching timing, and convergence issues.', 'Developed logic to stop exchange once the voltage difference falls within a selected tolerance.'],
    process: ['Begin with a two-cell topology to test charge-transfer behavior.', 'Model controlled switching and relevant parasitic effects.', 'Extend the logic toward multi-cell balancing and compare behavior.'],
    results: ['Add your circuit schematic and simulated cell-voltage trajectories.', 'Report a verified balancing time or current measurement if available.', 'Summarize an important solver or topology issue you resolved.'],
    tools: ['Simulink', 'Simscape Electrical', 'LTspice', 'MOSFET switching'],
    image: '', visual: 'circuit', imageNote: 'Replace with your own Simscape schematic or balancing results', status: 'RESEARCH CASE STUDY'
  },
  {
    slug: 'adaptive-link-budget', number: '04', title: 'Adaptive Link Budget', shortTitle: 'Adaptive Link Budget',
    eyebrow: 'COMMUNICATION SYSTEMS / MODELING',
    summary: 'An engineering project in adaptive communications link-budget analysis. Full technical write-up coming soon.',
    context: 'Communications engineering · Project details to add',
    overview: ['Add the design objective, intended operating scenario, and what makes this link budget adaptive.', 'Explain how this project differs from the mission-driven DSOC framework.'],
    contribution: ['Add the features, algorithms, and components you personally developed.', 'Describe the modeling or implementation tools you used.'],
    process: ['Add the main inputs, link-budget equations, or adaptation logic.', 'Describe how you evaluated or tested the model.'],
    results: ['Add a verified output plot or result table.', 'Explain which system decisions your model helps inform.'],
    tools: ['Add verified tools', 'Link analysis'],
    image: '', visual: 'signal', imageNote: 'Replace with your link-budget plot or system diagram', status: 'DETAILS IN PROGRESS'
  }
];

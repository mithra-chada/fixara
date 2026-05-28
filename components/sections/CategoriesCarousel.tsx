"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const CategoryDetail = ({ category, skills, description }: {
  category: string;
  skills: string[];
  description: string;
}) => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-500 text-base md:text-lg font-sans max-w-3xl mx-auto mb-6">
        {description}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white rounded-xl px-4 py-3 text-sm font-medium
                       text-[#1D1D1F] border border-[#E0E0E0]"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

const categoriesData = [
  {
    category: "Precision Engineering",
    title: "CNC & Precision Machines",
    src: "https://images.unsplash.com/photo-1565793979728-5571e4b6b3a8?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="CNC & Precision Machines"
        description="Expert technicians for CNC machining centres, lathes, and milling machines. We handle both electrical faults and mechanical breakdowns."
        skills={[
          "CNC Lathe Repair",
          "VMC Maintenance",
          "HMC Servicing",
          "Spindle Repair",
          "Ball Screw Replacement",
          "Controller Faults",
        ]}
      />
    ),
  },
  {
    category: "Electrical",
    title: "Electrical & Wiring",
    src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="Electrical & Wiring"
        description="From motor rewinds to PLC faults, our verified electricians handle every industrial electrical requirement on the shop floor."
        skills={[
          "Motor Rewinding",
          "Panel Wiring",
          "PLC Programming",
          "VFD Faults",
          "Transformer Repair",
          "Industrial Lighting",
        ]}
      />
    ),
  },
  {
    category: "Hydraulics",
    title: "Hydraulics & Pneumatics",
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="Hydraulics & Pneumatics"
        description="Cylinder leaks, valve failures, compressor faults — our hydraulic and pneumatic specialists restore pressure and flow fast."
        skills={[
          "Cylinder Repair",
          "Valve Replacement",
          "Compressor Service",
          "Hydraulic Pump",
          "Pressure Testing",
          "Pneumatic Lines",
        ]}
      />
    ),
  },
  {
    category: "Fabrication",
    title: "Welding & Fabrication",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="Welding & Fabrication"
        description="Certified welders for MIG, TIG, arc, and structural fabrication work. Available for both emergency repairs and planned fabrication jobs."
        skills={[
          "MIG Welding",
          "TIG Welding",
          "Arc Welding",
          "Structural Fabrication",
          "Sheet Metal Work",
          "Gas Cutting",
        ]}
      />
    ),
  },
  {
    category: "Material Handling",
    title: "Conveyors & Hoists",
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="Material Handling"
        description="Conveyor belt repairs, hoist servicing, and forklift maintenance to keep your material flow uninterrupted."
        skills={[
          "Belt Conveyor Repair",
          "Chain Conveyor",
          "EOT Crane Service",
          "Forklift Repair",
          "Hoist Maintenance",
          "Pallet Racking",
        ]}
      />
    ),
  },
  {
    category: "Food Processing",
    title: "Food Processing Equipment",
    src: "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="Food Processing Equipment"
        description="Hygiene-certified technicians for mixers, fillers, packaging lines, and cold storage equipment in food manufacturing units."
        skills={[
          "Mixer Repair",
          "Filling Machines",
          "Packaging Lines",
          "Cold Storage",
          "Conveyor Belts",
          "Sealing Machines",
        ]}
      />
    ),
  },
  {
    category: "Textile",
    title: "Textile Machinery",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="Textile Machinery"
        description="Specialists in loom repair, knitting frame servicing, winding machines, and textile plant maintenance across all fabric types."
        skills={[
          "Loom Repair",
          "Knitting Frames",
          "Winding Machines",
          "Warping Machines",
          "Dyeing Equipment",
          "Stenter Repair",
        ]}
      />
    ),
  },
  {
    category: "General",
    title: "General Maintenance",
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="General Maintenance"
        description="Plumbing, civil repairs, carpentry, and general upkeep for the non-machine areas of your manufacturing facility."
        skills={[
          "Industrial Plumbing",
          "Civil Repairs",
          "Carpentry",
          "Painting",
          "False Ceiling",
          "General Upkeep",
        ]}
      />
    ),
  },
  // UPGRADE 3 — ADDED 7 CATEGORIES (TOTAL 15)
  {
    category: "Compressors",
    title: "Air Compressors & Pumps",
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="Air Compressors & Pumps"
        description="Servicing and repair of screw compressors, reciprocating compressors, vacuum pumps, and industrial blowers."
        skills={["Screw Compressor", "Reciprocating Pump", "Vacuum Pump", "Air Dryer", "Pressure Valve", "Blower Repair"]}
      />
    ),
  },
  {
    category: "Refrigeration",
    title: "Industrial Refrigeration",
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e9e2d3?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="Industrial Refrigeration"
        description="Cold room maintenance, chiller servicing, and industrial HVAC repair for manufacturing and food processing plants."
        skills={["Cold Room Repair", "Chiller Service", "HVAC Maintenance", "Refrigerant Refill", "Condenser Cleaning", "Thermostat Faults"]}
      />
    ),
  },
  {
    category: "Instrumentation",
    title: "Instrumentation & Control",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="Instrumentation & Control"
        description="Calibration, installation, and repair of industrial sensors, flow meters, pressure gauges, and SCADA systems."
        skills={["Sensor Calibration", "Flow Meter Repair", "Pressure Gauges", "SCADA Faults", "DCS Systems", "HMI Repair"]}
      />
    ),
  },
  {
    category: "Pumps & Piping",
    title: "Pumps & Industrial Piping",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="Pumps & Industrial Piping"
        description="Centrifugal pump repairs, pipe laying, valve replacement, and industrial plumbing across all manufacturing environments."
        skills={["Centrifugal Pumps", "Submersible Pumps", "Pipe Fitting", "Valve Replacement", "Pipeline Testing", "Water Treatment"]}
      />
    ),
  },
  {
    category: "Generators",
    title: "Generators & DG Sets",
    src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="Generators & DG Sets"
        description="Diesel generator servicing, AMF panel repair, and power backup maintenance for uninterrupted manufacturing operations."
        skills={["DG Set Service", "AMF Panel", "AVR Repair", "Alternator Winding", "Fuel System", "Load Testing"]}
      />
    ),
  },
  {
    category: "Robotics & Automation",
    title: "Robotics & Automation",
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="Robotics & Automation"
        description="Maintenance and fault diagnosis for industrial robots, conveyor automation, servo drives, and automated assembly systems."
        skills={["Robot Programming", "Servo Drive Repair", "Conveyor Automation", "Vision Systems", "End Effector Repair", "Safety Systems"]}
      />
    ),
  },
  {
    category: "Safety Systems",
    title: "Fire & Safety Systems",
    src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop",
    content: (
      <CategoryDetail
        category="Fire & Safety Systems"
        description="Installation and AMC of fire detection, suppression, emergency lighting, and industrial safety systems for compliance and protection."
        skills={["Fire Detection", "Sprinkler Systems", "Emergency Lighting", "Gas Detection", "Safety Audits", "Fire Suppression"]}
      />
    ),
  },
];

export function CategoriesCarousel() {
  const cards = categoriesData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full py-20 bg-[#F5F5F7]">
      <Carousel 
        items={cards}
        eyebrow="Every machine. Every trade."
        title={<span>15+ categories.<br />One platform.</span>}
        subtext="From CNC to compressors, we cover the full floor. Tap any category to see the skills we dispatch."
        darkTheme={false}
      />
    </div>
  );
}

import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Lightbulb,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceVisualVariant } from '../components/ServiceVisual'

export interface Service {
  slug: string
  icon: LucideIcon
  variant: ServiceVisualVariant
  title: string
  description: string
  intro: string
  detailHeading: string
  detailBody: string
  challenges: string[]
  capabilities: { title: string; description: string }[]
  applications: { title: string; description: string }[]
  deliverables: { title: string; description: string }[]
  deliveryStages: { title: string; description: string }[]
  outcomes: string[]
}

export const SERVICE_TONES: Record<ServiceVisualVariant, string> = {
  ai: '#7c3aed',
  erp: '#0f9f8f',
  web: '#e45d42',
  cloud: '#0284c7',
  security: '#16a36a',
  consulting: '#d97706',
}

export const SERVICES: Service[] = [
  {
    slug: 'ai-machine-learning',
    icon: BrainCircuit,
    variant: 'ai',
    title: 'AI & Machine Learning',
    description:
      'Custom AI models, predictive analytics, and intelligent automation that turn your data into a competitive advantage.',
    intro:
      'Put your business data to work with practical AI solutions built around real workflows. From a focused proof of concept to production-ready machine learning, we help you move from experimentation to measurable impact.',
    detailHeading: 'Move from AI curiosity to useful outcomes',
    detailBody:
      'AI is most valuable when it solves a real, repeated business problem. We help your team identify the right opportunity, prepare the data and integrations it depends on, then build a solution people can trust and use.',
    challenges: [
      'Important information is spread across documents, tools, and teams.',
      'Manual reviews and repetitive decisions slow down everyday work.',
      'AI experiments have not yet become reliable, measurable workflows.',
    ],
    capabilities: [
      {
        title: 'Custom machine learning and predictive analytics',
        description:
          'Use historical business data to estimate likely outcomes such as demand, delays, or customer behavior. We help select relevant signals, compare a model against a clear baseline, and make its predictions available where decisions are made.',
      },
      {
        title: 'Generative AI assistants and knowledge search',
        description:
          'Let employees ask questions in natural language and find answers across approved internal material. We connect assistants to relevant knowledge sources, make answers traceable to those sources, and define when a person should review or take over.',
      },
      {
        title: 'Workflow automation and document processing',
        description:
          'Reduce repetitive work such as classifying incoming requests, extracting fields from documents, or routing cases to the right team. Human approval and exception handling can remain part of the process where accuracy matters.',
      },
      {
        title: 'Data strategy, evaluation, and deployment',
        description:
          'Check whether the required data is usable, define privacy and access boundaries, and evaluate model behavior with representative examples. Then integrate the solution into an existing product or workflow and plan how to monitor it over time.',
      },
    ],
    applications: [
      {
        title: 'Forecast demand and operational trends',
        description:
          'Combine relevant historical and current signals to help teams plan stock, capacity, or follow-up work earlier.',
      },
      {
        title: 'Search internal knowledge',
        description:
          'Bring policies, product documentation, and process guides into a permission-aware question-and-answer experience.',
      },
      {
        title: 'Classify and route incoming work',
        description:
          'Sort requests by intent or urgency and direct them to the right queue, while flagging uncertain cases for review.',
      },
      {
        title: 'Extract information from documents',
        description:
          'Turn recurring forms and documents into structured fields that staff can validate and pass into downstream systems.',
      },
    ],
    deliverables: [
      { title: 'Opportunity brief', description: 'A clear use case, affected users, success criteria, and a recommendation on where to begin.' },
      { title: 'Data and risk plan', description: 'An inventory of required information, access boundaries, quality gaps, and human oversight.' },
      { title: 'Working model or assistant', description: 'A tested prototype or integrated feature shaped around representative tasks and real feedback.' },
      { title: 'Evaluation and rollout guide', description: 'A practical way to review quality, monitor behavior, and plan safe iteration after launch.' },
    ],
    deliveryStages: [
      { title: 'Find the right opportunity', description: 'Map user workflows, define the decision or task to improve, and agree on how success will be evaluated.' },
      { title: 'Prepare data and guardrails', description: 'Review data quality, access, privacy, and the human review points needed for dependable use.' },
      { title: 'Prototype and evaluate', description: 'Build a focused solution, test it against representative examples, and refine it with real user feedback.' },
      { title: 'Integrate and improve', description: 'Connect the model to the workflow, monitor its behavior, and plan ongoing evaluation and iteration.' },
    ],
    outcomes: [
      'Make faster, better-informed decisions',
      'Reduce repetitive manual work',
      'Turn existing business data into useful insights',
    ],
  },
  {
    slug: 'erp-systems',
    icon: Database,
    variant: 'erp',
    title: 'ERP Systems',
    description:
      'Custom ERP solutions that unify inventory, finance, HR, and operations into one reliable system of record.',
    intro:
      'Bring disconnected teams and processes together with ERP software shaped around the way your business actually operates. We help plan, build, integrate, and improve systems that keep everyday work connected.',
    detailHeading: 'Connect the work behind your business',
    detailBody:
      'An ERP should reflect how your teams work—not force them into disconnected workarounds. We bring processes, information, and people into a coherent system, with a rollout plan that supports adoption as well as implementation.',
    challenges: [
      'Teams maintain separate spreadsheets and duplicate the same information.',
      'Leaders have to wait for manual reporting to understand current operations.',
      'Existing systems no longer fit changing processes or business growth.',
    ],
    capabilities: [
      {
        title: 'ERP implementation and workflow configuration',
        description:
          'Select and configure ERP modules around agreed business processes, approval paths, and user responsibilities. The goal is to fit the system to real operating needs while limiting unnecessary customization.',
      },
      {
        title: 'Finance, inventory, HR, and operations modules',
        description:
          'Connect day-to-day functions such as purchasing, stock movement, invoicing, employee records, and operational planning. Teams work from shared records instead of recreating the same information in separate tools.',
      },
      {
        title: 'Legacy system migration and integration',
        description:
          'Identify which records need to move, clean and map them to the new system, and connect external tools that remain in use. Reconciliation checks help teams verify important data before cutover.',
      },
      {
        title: 'Reporting and role-based access',
        description:
          'Give each role the information and actions it needs, while keeping sensitive records restricted. Dashboards and operational reports can draw from shared data to reduce manual consolidation.',
      },
    ],
    applications: [
      {
        title: 'Inventory, procurement, and orders',
        description:
          'Track stock from purchase through receipt and fulfillment, with clearer handoffs between purchasing, warehouse, and sales teams.',
      },
      {
        title: 'Finance and approvals',
        description:
          'Coordinate expenses, invoices, budgets, and approvals, then bring information together for regular financial reporting.',
      },
      {
        title: 'HR and employee administration',
        description:
          'Organize employee records and recurring people processes with access controls suited to managers, HR staff, and employees.',
      },
      {
        title: 'Operational planning',
        description:
          'Connect plans and actual activity so teams can review workload, supply, and performance using a shared operational picture.',
      },
    ],
    deliverables: [
      { title: 'Process and module map', description: 'A documented view of workflows, roles, dependencies, and the ERP scope to prioritize.' },
      { title: 'Configured system foundation', description: 'A tailored set of modules, permissions, and integrations aligned to agreed business processes.' },
      { title: 'Validated migration plan', description: 'Data preparation, reconciliation steps, and checks for a confident transition.' },
      { title: 'Adoption and reporting kit', description: 'Role-based guidance, rollout support, and useful views for day-to-day operations.' },
    ],
    deliveryStages: [
      { title: 'Map current workflows', description: 'Understand how each team works today, where information changes hands, and which constraints a new system must respect.' },
      { title: 'Design the system', description: 'Prioritize modules, integrations, access roles, and reporting around a clear target operating model.' },
      { title: 'Configure and migrate', description: 'Build and connect the solution, prepare data carefully, and validate it with the people who will use it.' },
      { title: 'Adopt and optimize', description: 'Support rollout and training, measure real usage, and improve processes as the system becomes part of daily work.' },
    ],
    outcomes: [
      'Create a dependable source of business information',
      'Reduce duplicate entry across departments',
      'Improve visibility into operations and performance',
    ],
  },
  {
    slug: 'web-mobile-development',
    icon: Code2,
    variant: 'web',
    title: 'Web & Mobile Development',
    description:
      'Scalable, high-performance web and mobile applications engineered with modern frameworks and clean architecture.',
    intro:
      'Build digital products that are useful from the first interaction and flexible enough to grow. We partner with you from product definition and interface design through engineering, launch, and ongoing improvement.',
    detailHeading: 'Turn a product idea into a dependable experience',
    detailBody:
      'Great software balances what users need with what your business can support over time. We bring product thinking, thoughtful design, and solid engineering together to deliver experiences that are clear, accessible, and ready to evolve.',
    challenges: [
      'Customers struggle to complete important tasks across digital touchpoints.',
      'A growing product is difficult to change, maintain, or extend safely.',
      'Teams need to validate an idea before committing to a large build.',
    ],
    capabilities: [
      {
        title: 'Responsive websites and web applications',
        description:
          'Build customer-facing sites, internal portals, and browser-based tools that adapt to different screen sizes and usage contexts. The implementation is structured so teams can maintain content and extend functionality over time.',
      },
      {
        title: 'iOS and Android mobile experiences',
        description:
          'Create mobile workflows around the tasks people need to complete on the move. We consider navigation, device constraints, connectivity, and platform conventions so the app feels usable beyond a desktop-sized screen.',
      },
      {
        title: 'Product design, prototyping, and accessibility',
        description:
          'Clarify user journeys and test interaction ideas before committing to a full build. Accessible patterns for keyboard use, contrast, and assistive technologies are considered as part of the design—not left as a last-minute pass.',
      },
      {
        title: 'APIs, integrations, and ongoing maintenance',
        description:
          'Connect the product to the services and data it depends on through clear API boundaries. Testing, documentation, and a maintainable codebase make it easier to fix issues and add features after launch.',
      },
    ],
    applications: [
      {
        title: 'Customer and partner portals',
        description:
          'Give customers or partners a secure place to check information, submit requests, and complete common tasks without waiting on manual support.',
      },
      {
        title: 'Mobile tools for field and on-the-go teams',
        description:
          'Put the essential workflow—such as viewing assignments or recording updates—within reach when staff are away from a desk.',
      },
      {
        title: 'Internal workflow applications',
        description:
          'Replace repeated email and spreadsheet coordination with a focused interface for assigning, reviewing, and tracking work.',
      },
      {
        title: 'Connected digital products',
        description:
          'Combine a polished user experience with APIs and business services so the product can fit into a wider technology environment.',
      },
    ],
    deliverables: [
      { title: 'Product direction', description: 'A shared understanding of users, priorities, product scope, and how success will be assessed.' },
      { title: 'Validated experience', description: 'User journeys, interface patterns, and prototypes reviewed before deeper engineering investment.' },
      { title: 'Production-ready software', description: 'A tested application, its integrations, and maintainable foundations for future development.' },
      { title: 'Launch and learning plan', description: 'Release preparation, operational handover, and a prioritized path for product improvement.' },
    ],
    deliveryStages: [
      { title: 'Discover the product', description: 'Align on users, business goals, core journeys, constraints, and the assumptions worth testing first.' },
      { title: 'Design the experience', description: 'Explore flows and prototypes, validate the interaction model, and establish an accessible visual system.' },
      { title: 'Build in increments', description: 'Deliver working software in reviewable stages with clear technical foundations and regular feedback.' },
      { title: 'Launch and learn', description: 'Prepare the release, monitor real-world behavior, and prioritize improvements from user and product signals.' },
    ],
    outcomes: [
      'Deliver a consistent experience across devices',
      'Launch with a maintainable technical foundation',
      'Adapt quickly as customer needs change',
    ],
  },
  {
    slug: 'cloud-devops',
    icon: Cloud,
    variant: 'cloud',
    title: 'Cloud & DevOps',
    description:
      'Cloud architecture, CI/CD pipelines, and infrastructure automation that scales reliably with your business.',
    intro:
      'Make your infrastructure more reliable, secure, and ready to scale. We help teams choose an effective cloud foundation and streamline how software moves from development into production.',
    detailHeading: 'Make every release a more reliable one',
    detailBody:
      'Cloud and DevOps are about more than infrastructure—they shape how quickly and safely your team can deliver. We improve the foundations, automation, and operational visibility that help services stay dependable as demand changes.',
    challenges: [
      'Releases rely on manual steps that are slow or difficult to repeat.',
      'Infrastructure has grown without clear ownership or consistent setup.',
      'Teams discover reliability or cloud cost problems too late.',
    ],
    capabilities: [
      {
        title: 'Cloud architecture and migration planning',
        description:
          'Choose an architecture based on workload, availability, security, and operational requirements. For migrations, plan dependencies and transition steps so the move is deliberate rather than a rushed lift-and-shift.',
      },
      {
        title: 'Infrastructure as code and environment automation',
        description:
          'Describe infrastructure and configuration in version-controlled code so environments can be reviewed and reproduced. Automated setup reduces one-off manual changes and makes ownership easier to understand.',
      },
      {
        title: 'CI/CD pipelines and release engineering',
        description:
          'Automate the repeatable steps that take a change from source control through checks and deployment. Add appropriate quality gates and a clear recovery path to help teams release smaller changes more safely.',
      },
      {
        title: 'Observability, reliability, and cloud costs',
        description:
          'Bring logs, metrics, and traces together to help teams understand system behavior. Use service objectives and usage reviews to prioritize reliability work and spot cloud spend that no longer matches actual demand.',
      },
    ],
    applications: [
      {
        title: 'Cloud foundations and workload migrations',
        description:
          'Establish accounts, network boundaries, access patterns, and shared services before moving selected workloads in planned stages.',
      },
      {
        title: 'Build, test, and deployment pipelines',
        description:
          'Run consistent checks for each change and make release status visible to developers and operations teams.',
      },
      {
        title: 'On-demand development environments',
        description:
          'Provision consistent test and staging environments from reusable configuration instead of manually rebuilding them.',
      },
      {
        title: 'Service monitoring and incident readiness',
        description:
          'Define meaningful health signals, alert on actionable conditions, and document who responds when a service needs attention.',
      },
    ],
    deliverables: [
      { title: 'Cloud architecture plan', description: 'A workload-aware target design with environment, security, and scaling considerations.' },
      { title: 'Automated infrastructure', description: 'Repeatable configuration and deployment foundations that reduce manual setup.' },
      { title: 'Delivery pipeline', description: 'A build and release flow with checks, visibility, and clear paths for recovery.' },
      { title: 'Operations runbook', description: 'Useful service signals, ownership guidance, and response steps for ongoing operations.' },
    ],
    deliveryStages: [
      { title: 'Assess the landscape', description: 'Review workloads, delivery workflows, reliability needs, security expectations, and current cloud spend.' },
      { title: 'Shape the platform', description: 'Define a right-sized architecture, environment boundaries, access patterns, and operational standards.' },
      { title: 'Automate delivery', description: 'Introduce repeatable infrastructure and release pipelines with checks that fit the team and product.' },
      { title: 'Observe and improve', description: 'Make service health visible, prepare response practices, and continuously tune reliability and cost.' },
    ],
    outcomes: [
      'Release changes with more confidence',
      'Improve service reliability and visibility',
      'Scale infrastructure without unnecessary complexity',
    ],
  },
  {
    slug: 'cybersecurity',
    icon: ShieldCheck,
    variant: 'security',
    title: 'Cybersecurity',
    description:
      'End-to-end security audits, threat monitoring, and compliance-ready infrastructure to keep you protected.',
    intro:
      'Build security into your systems and day-to-day operations. We work with your team to understand risks, strengthen defenses, and make security improvements practical and clear.',
    detailHeading: 'Make security a practical part of delivery',
    detailBody:
      'Security works best when it is understood, prioritized, and built into the way teams deliver software. We help uncover exposure, clarify risk, and turn recommendations into sustainable controls without losing sight of business needs.',
    challenges: [
      'Teams are unsure which security risks deserve attention first.',
      'Access, data handling, and system changes are difficult to review consistently.',
      'Security checks happen late, making improvements more disruptive.',
    ],
    capabilities: [
      {
        title: 'Application and infrastructure security reviews',
        description:
          'Review architecture, configuration, and important application paths to identify weaknesses in context. Findings should explain why an issue matters and give teams enough detail to decide on a fix.',
      },
      {
        title: 'Threat modeling and vulnerability management',
        description:
          'Map important assets, trust boundaries, and plausible threat paths before or during development. Triage discovered vulnerabilities by exposure and business impact, then track remediation and verification.',
      },
      {
        title: 'Identity, access, and data protection',
        description:
          'Review who can access systems and sensitive data, and whether access is appropriate to each role. Recommend practical controls such as stronger authentication, reduced standing privileges, and safer data handling.',
      },
      {
        title: 'Security and compliance readiness guidance',
        description:
          'Help organize policies, evidence, ownership, and technical safeguards around the requirements relevant to your organization. This supports readiness work but does not itself constitute a certification or guarantee compliance.',
      },
    ],
    applications: [
      {
        title: 'Pre-launch application and cloud reviews',
        description:
          'Check key application flows and infrastructure settings before a new product or major change reaches users.',
      },
      {
        title: 'Access reviews across teams and systems',
        description:
          'Clarify account ownership and permissions, remove unnecessary access, and make joiner or leaver changes more consistent.',
      },
      {
        title: 'Threat modeling for new features',
        description:
          'Discuss how a feature could be misused, what data it exposes, and which safeguards should be built into its design.',
      },
      {
        title: 'Vulnerability remediation planning',
        description:
          'Turn a long issue list into prioritized fixes, assign owners, and verify that the highest-impact items are addressed.',
      },
    ],
    deliverables: [
      { title: 'Risk and asset overview', description: 'A contextual view of important systems, sensitive data, and priority areas for review.' },
      { title: 'Assessment findings', description: 'Clear security observations with impact, supporting context, and practical next steps.' },
      { title: 'Remediation roadmap', description: 'A sequenced action plan that considers risk, effort, owners, and delivery constraints.' },
      { title: 'Security practice guide', description: 'Repeatable review and protection recommendations that fit day-to-day engineering work.' },
    ],
    deliveryStages: [
      { title: 'Understand the environment', description: 'Identify important systems, data flows, users, dependencies, and the business impact of potential threats.' },
      { title: 'Prioritize exposure', description: 'Review controls and likely attack paths, then rank findings by context and practical risk.' },
      { title: 'Strengthen defenses', description: 'Agree on safeguards and remediation work that teams can implement and verify.' },
      { title: 'Build lasting practice', description: 'Improve ownership, review routines, and security checks so protection evolves with the product.' },
    ],
    outcomes: [
      'Understand and prioritize your security risks',
      'Protect sensitive systems and business information',
      'Give teams a clear path to stronger security practices',
    ],
  },
  {
    slug: 'it-consulting-strategy',
    icon: Lightbulb,
    variant: 'consulting',
    title: 'IT Consulting & Strategy',
    description:
      'Technology roadmaps and digital transformation strategy tailored to your goals and growth stage.',
    intro:
      'Make technology decisions with a clear view of your goals, constraints, and opportunities. Our consulting helps you assess what is in place, prioritize what matters, and shape a roadmap your team can act on.',
    detailHeading: 'Make your next technology decision with clarity',
    detailBody:
      'A useful strategy connects business priorities to decisions teams can actually execute. We bring an independent, practical perspective to your systems, plans, and trade-offs—then help translate direction into an achievable roadmap.',
    challenges: [
      'Technology initiatives compete without a shared way to prioritize them.',
      'Teams need an objective view of architecture, vendors, or delivery risks.',
      'A transformation vision exists, but the next actionable steps are unclear.',
    ],
    capabilities: [
      {
        title: 'Technology assessments and architecture guidance',
        description:
          'Review the systems, integrations, and operating constraints behind a business goal. Identify risks and options, then explain the trade-offs so decision-makers can choose a direction with context.',
      },
      {
        title: 'Transformation and modernization roadmaps',
        description:
          'Break a broad change program into sequenced initiatives with dependencies, decision points, and outcomes. A roadmap should help teams decide what to do next—not just describe a distant target state.',
      },
      {
        title: 'Product discovery and technical planning',
        description:
          'Clarify target users, core workflows, assumptions, and technical constraints before a larger investment. Discovery can narrow scope and identify what should be prototyped or validated first.',
      },
      {
        title: 'Vendor evaluation and implementation support',
        description:
          'Compare vendors and solution approaches against your requirements, integration needs, and ownership model. During implementation, provide an independent view of progress, risks, and important technical decisions.',
      },
    ],
    applications: [
      {
        title: 'Technology assessments for growing teams',
        description:
          'Understand whether existing platforms, skills, and operating practices can support the next stage of growth.',
      },
      {
        title: 'Legacy modernization planning',
        description:
          'Identify which parts of an older platform should be retained, improved, replaced, or phased out—and in what order.',
      },
      {
        title: 'Product scope and investment discovery',
        description:
          'Test key assumptions, outline the smallest useful first release, and make effort and dependency trade-offs visible.',
      },
      {
        title: 'Vendor selection and delivery oversight',
        description:
          'Make selection criteria explicit and help review delivery milestones, risks, and proposed changes during implementation.',
      },
    ],
    deliverables: [
      { title: 'Current-state assessment', description: 'A concise view of systems, workflows, team needs, constraints, and decision risks.' },
      { title: 'Options and trade-offs', description: 'A comparison of viable directions, dependencies, investment considerations, and risks.' },
      { title: 'Prioritized roadmap', description: 'A sequenced plan of initiatives, decision points, and outcomes to guide delivery.' },
      { title: 'Execution support', description: 'Ongoing guidance for implementation choices, progress reviews, and course corrections.' },
    ],
    deliveryStages: [
      { title: 'Listen and assess', description: 'Understand business objectives, existing systems, team capabilities, and the decisions that are currently blocked.' },
      { title: 'Identify opportunities', description: 'Compare options, dependencies, risks, and value to surface the most useful next moves.' },
      { title: 'Build a roadmap', description: 'Sequence work into clear phases with practical outcomes, ownership, and decision checkpoints.' },
      { title: 'Support execution', description: 'Help teams navigate implementation, review progress, and adjust direction as new information appears.' },
    ],
    outcomes: [
      'Focus investment on the highest-value opportunities',
      'Align technical decisions with business priorities',
      'Move forward with a practical, phased roadmap',
    ],
  },
]

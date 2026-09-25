export interface Chapter {
  t: number;
  title: string;
}

export interface VideoResource {
  v: string;
  title: string;
  channel: string;
  seconds: number;
  note: string;
  chapters: Chapter[];
}

export interface Station {
  id: string;
  title: string;
  goal: string;
  concepts: string[];
  build: string;
  res: VideoResource[];
}

export interface Phase {
  id: string;
  n: string;
  tag: string;
  title: string;
  blurb: string;
  sources: string[];
  stations: Station[];
}




export const PHASES: Phase[] = [
  {
    "id": "p0",
    "n": "00",
    "tag": "Orientation",
    "title": "What an FDE actually is",
    "blurb": "Before tactics: the role, where it came from, what the day looks like, and what the market pays. Cheap to do first and it stops you optimizing the wrong skill.",
    "sources": [
      "vibe F1",
      "roadmap.sh Introduction"
    ],
    "stations": [
      {
        "id": "p0-s0",
        "title": "The role, the day, the market",
        "goal": "Define the job in your own words and know why every AI lab hires it now.",
        "concepts": [
          "Outcomes over features",
          "Embedded vs remote",
          "Product vs consulting tension",
          "Where FDEs sit in AI labs",
          "2026 market & comp"
        ],
        "build": "Take a real product you know and write the one-page brief for deploying it inside a specific company: the outcome, the blockers, the first two weeks.",
        "res": [
          {
            "v": "vLlIBT0HSSc",
            "title": "How to Become a Forward Deployed Engineer in 2026",
            "channel": "Tech With Tim",
            "seconds": 695,
            "note": "Fast, current orientation. Best single starting point.",
            "chapters": [
              {
                "t": 0,
                "title": "Overview"
              },
              {
                "t": 46,
                "title": "What a Forward Deployed Engineer actually is"
              },
              {
                "t": 128,
                "title": "Why Demand Exploded"
              },
              {
                "t": 196,
                "title": "The Skill Stack"
              },
              {
                "t": 309,
                "title": "How to learn this"
              },
              {
                "t": 421,
                "title": "The Fast Path (3 steps)"
              },
              {
                "t": 565,
                "title": "The Interview: What to expect"
              }
            ]
          },
          {
            "v": "fn5q0mtb988",
            "title": "FDE: A hot new AI career role",
            "channel": "codebasics",
            "seconds": 2042,
            "note": "Best role breakdown: business analyst + solution architect + engineer, salaries, responsibilities, interview tips.",
            "chapters": [
              {
                "t": 0,
                "title": "Intro"
              },
              {
                "t": 105,
                "title": "FDE=business analyst + solution architect + engineer"
              },
              {
                "t": 265,
                "title": "Salaries"
              },
              {
                "t": 277,
                "title": "Pain point that FDE solves"
              },
              {
                "t": 681,
                "title": "3 Major responsibilities"
              },
              {
                "t": 951,
                "title": "Onsite cordinator vs FDE"
              },
              {
                "t": 1083,
                "title": "History"
              },
              {
                "t": 1184,
                "title": "Domain knowledge, typical day, vibe coding"
              },
              {
                "t": 1532,
                "title": "Skillset for FDE"
              },
              {
                "t": 1796,
                "title": "Interview tips"
              },
              {
                "t": 1880,
                "title": "FDE Roadmap"
              }
            ]
          },
          {
            "v": "SOU28VT-Ns4",
            "title": "FDE Roadmap in 20 Minutes",
            "channel": "Abhishek.Veeramalla",
            "seconds": 1272,
            "note": "Condensed roadmap — watch after the two above to see the whole shape.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to FD"
              },
              {
                "t": 41,
                "title": "Defining the FD engineer"
              },
              {
                "t": 567,
                "title": "Detailed learning road map"
              }
            ]
          },
          {
            "v": "avoCzARQ5oc",
            "title": "Complete AI FDE Roadmap With Usecases",
            "channel": "Krish Naik",
            "seconds": 1384,
            "note": "Longer walkthrough with use cases; good for note-taking.",
            "chapters": []
          },
          {
            "v": "uE4HTkDtp48",
            "title": "Forward Deployed Engineer (FDE) Roadmap",
            "channel": "codebasics",
            "seconds": 2418,
            "note": "Deep version of the codebasics roadmap if you want the full tour.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to FDE role"
              },
              {
                "t": 173,
                "title": "Phase 1: Technical basics"
              },
              {
                "t": 353,
                "title": "AI development workflows"
              },
              {
                "t": 524,
                "title": "LLMs and RAG fundamentals"
              },
              {
                "t": 635,
                "title": "Agentic AI and systems"
              },
              {
                "t": 781,
                "title": "ERP and enterprise integration"
              },
              {
                "t": 1145,
                "title": "DevOps for AI"
              },
              {
                "t": 1302,
                "title": "LLMOps and observability"
              },
              {
                "t": 1416,
                "title": "AI system design"
              },
              {
                "t": 1614,
                "title": "Phase 2: Product management"
              },
              {
                "t": 1888,
                "title": "Requirements and technical design"
              },
              {
                "t": 2013,
                "title": "Communication and branding"
              },
              {
                "t": 2241,
                "title": "Deployment and handover"
              }
            ]
          },
          {
            "v": "cBD7_R-Cizg",
            "title": "Colin Jarvis (Head of FDE, OpenAI): Trust. Product. Impact.",
            "channel": "Altimeter Capital",
            "seconds": 2405,
            "note": "What the head of FDE at OpenAI says the job is. Practitioner truth.",
            "chapters": [
              {
                "t": 0,
                "title": "Intro"
              },
              {
                "t": 165,
                "title": "OpenAI - Morgan Stanley"
              },
              {
                "t": 345,
                "title": "OpenAI - Semiconductor Co"
              },
              {
                "t": 540,
                "title": "FDE's Eval Driven Development"
              },
              {
                "t": 630,
                "title": "Customer Service across Klarna and T Mobile"
              },
              {
                "t": 945,
                "title": "Supply Chain Live Demo"
              },
              {
                "t": 1470,
                "title": "Advice to Founders building FDE teams"
              },
              {
                "t": 1620,
                "title": "What Not to Do in FDE"
              },
              {
                "t": 1740,
                "title": "Rapid-Fire Takeaways: Long/Short"
              },
              {
                "t": 1980,
                "title": "Underrated AI Tools"
              },
              {
                "t": 2115,
                "title": "Highlights and Lowlights from OpenAI"
              },
              {
                "t": 2295,
                "title": "2026 Will Be the Year Of…"
              }
            ]
          },
          {
            "v": "KwhgfwOSToQ",
            "title": "FDE 101 — Kevin Bai, Anthropic, ex-Palantir & Rippling",
            "channel": "AI Engineer",
            "seconds": 1068,
            "note": "The single best 'what this role really is' talk. Palantir roots → Anthropic applied AI.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction: what this 101 covers"
              },
              {
                "t": 107,
                "title": "What Palantir does, and where FDE fits"
              },
              {
                "t": 194,
                "title": "Selling a solution, not a product or a service"
              },
              {
                "t": 258,
                "title": "When your buyer isn't technical"
              },
              {
                "t": 359,
                "title": "The business case: landing large contracts"
              },
              {
                "t": 436,
                "title": "FDE as a partnership on a reusable platform"
              },
              {
                "t": 588,
                "title": "How to start: two questions to ask"
              },
              {
                "t": 694,
                "title": "What has changed since Palantir"
              },
              {
                "t": 788,
                "title": "Q&A"
              }
            ]
          },
          {
            "v": "5OYy_UtINo4",
            "title": "The Role of a Forward Deployed Software Engineer",
            "channel": "Palantir",
            "seconds": 218,
            "note": "The source. Palantir's own description of the model.",
            "chapters": [
              {
                "t": 0,
                "title": "<Untitled Chapter 1>"
              },
              {
                "t": 17,
                "title": "THE ROLE OF A FORWARD DEPLOYED ENGINEER"
              },
              {
                "t": 112,
                "title": "SOLVING PROBLEMS THAT MATTER"
              },
              {
                "t": 174,
                "title": "A CULTURE FOR THE AMBITIOUS"
              }
            ]
          },
          {
            "v": "hWuoH-ODDNc",
            "title": "The Future of Forward Deployed Engineering — OpenAI, Ramp, Nominal",
            "channel": "South Park Commons",
            "seconds": 3105,
            "note": "Panel: where the role goes next. Useful for content angles.",
            "chapters": [
              {
                "t": 0,
                "title": "<Untitled Chapter 1>"
              },
              {
                "t": 5,
                "title": "Introductions"
              },
              {
                "t": 105,
                "title": "Defining Forward Deployed Engineering"
              },
              {
                "t": 313,
                "title": "Why AI is driving the demand for FDEs"
              },
              {
                "t": 576,
                "title": "The evolution of FDEs and AI coding tools"
              },
              {
                "t": 885,
                "title": "FDE vs. Consulting: Avoiding the services trap"
              },
              {
                "t": 1312,
                "title": "Balancing custom builds with core product engineering"
              },
              {
                "t": 1513,
                "title": "Navigating the tension between FDE and Core Product"
              },
              {
                "t": 2014,
                "title": "Scaling the FDE motion at OpenAI"
              },
              {
                "t": 2474,
                "title": "Finding the right profile for an FDE"
              }
            ]
          },
          {
            "v": "NFTyOmzZpHg",
            "title": "A Day as Forward Deployed Engineer",
            "channel": "Northslope",
            "seconds": 87,
            "note": "90 seconds of the actual day. Good reality check.",
            "chapters": []
          },
          {
            "v": "VnIDWlOzb6s",
            "title": "I gave 15 FDE interviews. Here's what they ask.",
            "channel": "Anu Sharma",
            "seconds": 341,
            "note": "Hiring-side view — start building toward these.",
            "chapters": [
              {
                "t": 0,
                "title": "The evolving interview landscape"
              },
              {
                "t": 54,
                "title": "Key interview patterns"
              },
              {
                "t": 117,
                "title": "Technical and design shift"
              },
              {
                "t": 222,
                "title": "AI security and final advice"
              }
            ]
          },
          {
            "v": "zXysLUTLjw4",
            "title": "FDE: The $1M/Year AI Job Explained",
            "channel": "Greg Isenberg",
            "seconds": 3094,
            "note": "The comp/business-reality framing; matches this repo's market research.",
            "chapters": [
              {
                "t": 0,
                "title": "Intro"
              },
              {
                "t": 123,
                "title": "What is an FDE"
              },
              {
                "t": 249,
                "title": "How Palantir Popularized FDEs"
              },
              {
                "t": 376,
                "title": "Deciding Where Intelligence Belongs"
              },
              {
                "t": 686,
                "title": "What FDEs Earn"
              },
              {
                "t": 899,
                "title": "Two Kinds of Judgment: Communication and Engineering"
              },
              {
                "t": 1058,
                "title": "How the Work Really Gets Done"
              },
              {
                "t": 1240,
                "title": "Audit, Evaluation, Deployment"
              },
              {
                "t": 1376,
                "title": "Which LLM to Choose"
              },
              {
                "t": 1656,
                "title": "Audit: Finding the Workflow Worth Rebuilding"
              },
              {
                "t": 1907,
                "title": "Evals: Turn non-determinism into evidence"
              },
              {
                "t": 1977,
                "title": "Deployment: Build on Existing Systems"
              },
              {
                "t": 2339,
                "title": "The 30-Day Plan Begins"
              },
              {
                "t": 2953,
                "title": "Final Thoughts"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "p1",
    "n": "01",
    "tag": "Foundations · optional",
    "title": "Foundations (skip what you know)",
    "blurb": "You are an experienced dev (ex-Airstack, 144 repos). Treat this phase as a gap-check, not a course. Sample only the parts you're weak on, then move to Phase 2.",
    "sources": [
      "roadmap.sh CS Foundations",
      "roadmap.sh Full Stack for AI"
    ],
    "stations": [
      {
        "id": "p1-s0",
        "title": "Programming & tooling baseline",
        "goal": "Comfortable Python for LLM work + the shell/git muscle an FDE lives in daily.",
        "concepts": [
          "Python",
          "Git & PRs",
          "Linux / CLI"
        ],
        "build": "Confirm you can get from zero to a running program with a virtualenv, a git branch and a shell one-liner without googling the basics.",
        "res": [
          {
            "v": "rfscVS0vtbw",
            "title": "Learn Python — Full Course for Beginners",
            "channel": "freeCodeCamp",
            "seconds": 16012,
            "note": "Only if Python isn't fluent. Skim to generators/decorators/typing.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 105,
                "title": "Installing Python & PyCharm"
              },
              {
                "t": 400,
                "title": "Setup & Hello World"
              },
              {
                "t": 623,
                "title": "Drawing a Shape"
              },
              {
                "t": 906,
                "title": "Variables & Data Types"
              },
              {
                "t": 1623,
                "title": "Working With Strings"
              },
              {
                "t": 2298,
                "title": "Working With Numbers"
              },
              {
                "t": 2906,
                "title": "Getting Input From Users"
              },
              {
                "t": 3157,
                "title": "Building a Basic Calculator"
              },
              {
                "t": 3507,
                "title": "Mad Libs Game"
              },
              {
                "t": 3790,
                "title": "Lists"
              },
              {
                "t": 4244,
                "title": "List Functions"
              },
              {
                "t": 4737,
                "title": "Tuples"
              },
              {
                "t": 5055,
                "title": "Functions"
              },
              {
                "t": 5651,
                "title": "Return Statement"
              },
              {
                "t": 6006,
                "title": "If Statements"
              },
              {
                "t": 6847,
                "title": "If Statements & Comparisons"
              },
              {
                "t": 7237,
                "title": "Building a better Calculator"
              },
              {
                "t": 7637,
                "title": "Dictionaries"
              },
              {
                "t": 8053,
                "title": "While Loop"
              },
              {
                "t": 8421,
                "title": "Building a Guessing Game"
              },
              {
                "t": 9164,
                "title": "For Loops"
              },
              {
                "t": 9680,
                "title": "Exponent Function"
              },
              {
                "t": 10033,
                "title": "2D Lists & Nested Loops"
              },
              {
                "t": 10361,
                "title": "Building a Translator"
              },
              {
                "t": 10818,
                "title": "Comments"
              },
              {
                "t": 11057,
                "title": "Try / Except"
              },
              {
                "t": 11561,
                "title": "Reading Files"
              },
              {
                "t": 12086,
                "title": "Writing to Files"
              },
              {
                "t": 12493,
                "title": "Modules & Pip"
              },
              {
                "t": 13436,
                "title": "Classes & Objects"
              },
              {
                "t": 14257,
                "title": "Building a Multiple Choice Quiz"
              },
              {
                "t": 14908,
                "title": "Object Functions"
              },
              {
                "t": 15157,
                "title": "Inheritance"
              },
              {
                "t": 15643,
                "title": "Python Interpreter"
              }
            ]
          },
          {
            "v": "zwUSZD3t_BU",
            "title": "AI Engineer Roadmap — How I'd Learn AI in 2026",
            "channel": "codebasics",
            "seconds": 3956,
            "note": "Bridge from general dev to AI engineering. Watch this once.",
            "chapters": [
              {
                "t": 0,
                "title": "Intro"
              },
              {
                "t": 91,
                "title": "Salaries & different categories"
              },
              {
                "t": 247,
                "title": "Suitability test"
              },
              {
                "t": 287,
                "title": "Skills that are in demand"
              },
              {
                "t": 354,
                "title": "Tech skills vs core skills"
              },
              {
                "t": 392,
                "title": "AI engineer categories"
              },
              {
                "t": 684,
                "title": "Conversation with AtliQ CEO"
              },
              {
                "t": 1362,
                "title": "AI Basics + Beginner’s Python"
              },
              {
                "t": 1553,
                "title": "Data Structures and Algorithms in Python"
              },
              {
                "t": 1724,
                "title": "Advanced Python"
              },
              {
                "t": 2111,
                "title": "Version Control (Git, GitHub)"
              },
              {
                "t": 2354,
                "title": "NumPy, Pandas, Data Visualization, SQL"
              },
              {
                "t": 2448,
                "title": "Maths & Statistics for AI"
              },
              {
                "t": 2557,
                "title": "Machine Learning"
              },
              {
                "t": 2806,
                "title": "DevOps, MLOps, FastAPI"
              },
              {
                "t": 3034,
                "title": "Machine Learning Projects"
              },
              {
                "t": 3173,
                "title": "Deep Learning"
              },
              {
                "t": 3316,
                "title": "NLP or Computer Vision"
              },
              {
                "t": 3440,
                "title": "Gen AI and Agentic AI"
              },
              {
                "t": 3512,
                "title": "Gen AI and Agentic AI projects"
              },
              {
                "t": 3562,
                "title": "Unguided AI Projects"
              },
              {
                "t": 3695,
                "title": "Azure or AWS"
              },
              {
                "t": 3825,
                "title": "Week 33 onwards"
              },
              {
                "t": 3863,
                "title": "Tips"
              }
            ]
          },
          {
            "v": "RGOj5yH7evk",
            "title": "Git and GitHub for Beginners — Crash Course",
            "channel": "freeCodeCamp",
            "seconds": 4110,
            "note": "Skip if solid; reference for the branching/PR parts.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 70,
                "title": "What is git?"
              },
              {
                "t": 90,
                "title": "What is version control?"
              },
              {
                "t": 130,
                "title": "Terms to be learn in video"
              },
              {
                "t": 320,
                "title": "Git commands"
              },
              {
                "t": 425,
                "title": "sign up in GitHub"
              },
              {
                "t": 692,
                "title": "using git in local machine"
              },
              {
                "t": 714,
                "title": "git install"
              },
              {
                "t": 768,
                "title": "getting code editor"
              },
              {
                "t": 810,
                "title": "inside VS Code"
              },
              {
                "t": 870,
                "title": "cloning through VS Code"
              },
              {
                "t": 1050,
                "title": "git commit command"
              },
              {
                "t": 1095,
                "title": "git add command"
              },
              {
                "t": 1155,
                "title": "committing"
              },
              {
                "t": 1220,
                "title": "git push command"
              },
              {
                "t": 1230,
                "title": "SSH Keys"
              },
              {
                "t": 1525,
                "title": "git push"
              },
              {
                "t": 1821,
                "title": "Review workflow so far"
              },
              {
                "t": 1900,
                "title": "Compare between GitHub workflow and local git workflow"
              },
              {
                "t": 1962,
                "title": "git branching"
              },
              {
                "t": 3390,
                "title": "Undoing in git"
              },
              {
                "t": 3710,
                "title": "Forking in git"
              },
              {
                "t": 4075,
                "title": "Ending"
              }
            ]
          },
          {
            "v": "yz7nYlnXLfE",
            "title": "Command Line Crash Course",
            "channel": "freeCodeCamp",
            "seconds": 2135,
            "note": "Shell basics — the FDE debugs through bastion hosts and servers.",
            "chapters": [
              {
                "t": 0,
                "title": "Intro"
              },
              {
                "t": 20,
                "title": "Overview"
              },
              {
                "t": 47,
                "title": "Who am I"
              },
              {
                "t": 110,
                "title": "What is the command line"
              },
              {
                "t": 266,
                "title": "Windows command line"
              },
              {
                "t": 362,
                "title": "Bash"
              },
              {
                "t": 660,
                "title": "Terminal"
              },
              {
                "t": 720,
                "title": "Creating Files"
              },
              {
                "t": 1197,
                "title": "Vim"
              },
              {
                "t": 1466,
                "title": "Process Management"
              },
              {
                "t": 1575,
                "title": "IronCat"
              },
              {
                "t": 1700,
                "title": "Demonstration"
              }
            ]
          },
          {
            "v": "ROjZy1WbCIA",
            "title": "Linux Operating System — Crash Course for Beginners",
            "channel": "freeCodeCamp",
            "seconds": 10076,
            "note": "Optional deep version of the CLI material.",
            "chapters": [
              {
                "t": 0,
                "title": "Intro"
              },
              {
                "t": 489,
                "title": "Install Linux"
              },
              {
                "t": 1783,
                "title": "Desktop Environment"
              },
              {
                "t": 2478,
                "title": "Terminal"
              },
              {
                "t": 2965,
                "title": "Working with Directories"
              },
              {
                "t": 4549,
                "title": "Working with Files"
              },
              {
                "t": 5689,
                "title": "Working with File Content"
              },
              {
                "t": 6674,
                "title": "Linux File Structure"
              },
              {
                "t": 8142,
                "title": "Networking"
              },
              {
                "t": 8410,
                "title": "Linux Package Manager"
              },
              {
                "t": 9250,
                "title": "Text Editor"
              },
              {
                "t": 10016,
                "title": "Outro"
              }
            ]
          }
        ]
      },
      {
        "id": "p1-s1",
        "title": "Systems & interfaces",
        "goal": "Speak the language of the systems you'll integrate with.",
        "concepts": [
          "System design",
          "SQL",
          "REST APIs",
          "OAuth / SSO",
          "Webhooks"
        ],
        "build": "Map the integration plan for an AI assistant that reads CRM records and writes follow-up tasks: systems, auth, failure points.",
        "res": [
          {
            "v": "F2FmTdLtb_4",
            "title": "System Design Concepts Course and Interview Prep",
            "channel": "freeCodeCamp",
            "seconds": 3218,
            "note": "Scalability, caching, queues, load balancing — the vocabulary for design rounds.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 39,
                "title": "Computer Architecture (Disk Storage, RAM, Cache, CPU)"
              },
              {
                "t": 262,
                "title": "Production App Architecture (CI/CD, Load Balancers, Logging & Monitoring)"
              },
              {
                "t": 432,
                "title": "Design Requirements (CAP Theorem, Throughput, Latency, SLOs and SLAs)"
              },
              {
                "t": 880,
                "title": "Networking (TCP, UDP, DNS, IP Addresses & IP Headers)"
              },
              {
                "t": 1143,
                "title": "Application Layer Protocols (HTTP, WebSockets, WebRTC, MQTT, etc)"
              },
              {
                "t": 1441,
                "title": "API Design"
              },
              {
                "t": 1759,
                "title": "Caching and CDNs"
              },
              {
                "t": 2193,
                "title": "Proxy Servers (Forward/Reverse Proxies)"
              },
              {
                "t": 2556,
                "title": "Load Balancers"
              },
              {
                "t": 2885,
                "title": "Databases (Sharding, Replication, ACID, Vertical & Horizontal Scaling)"
              }
            ]
          },
          {
            "v": "HXV3zeQKqGY",
            "title": "SQL Tutorial — Full Database Course for Beginners",
            "channel": "freeCodeCamp",
            "seconds": 15639,
            "note": "FDEs live in customer databases. Skim to joins/aggregations/indexes.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 156,
                "title": "What is a Database?"
              },
              {
                "t": 1390,
                "title": "Tables & Keys"
              },
              {
                "t": 2611,
                "title": "SQL Basics"
              },
              {
                "t": 3146,
                "title": "MySQL Windows Installation"
              },
              {
                "t": 3719,
                "title": "MySQL Mac Installation"
              },
              {
                "t": 4549,
                "title": "Creating Tables"
              },
              {
                "t": 5465,
                "title": "Inserting Data"
              },
              {
                "t": 5897,
                "title": "Constraints"
              },
              {
                "t": 6491,
                "title": "Update & Delete"
              },
              {
                "t": 6971,
                "title": "Basic Queries"
              },
              {
                "t": 7717,
                "title": "Company Database Intro"
              },
              {
                "t": 8045,
                "title": "Creating Company Database"
              },
              {
                "t": 9027,
                "title": "More Basic Queries"
              },
              {
                "t": 9913,
                "title": "Wildcards"
              },
              {
                "t": 10433,
                "title": "Union"
              },
              {
                "t": 10896,
                "title": "Joins"
              },
              {
                "t": 11509,
                "title": "Nested Queries"
              },
              {
                "t": 12112,
                "title": "On Delete"
              },
              {
                "t": 12605,
                "title": "Triggers"
              },
              {
                "t": 13332,
                "title": "ER Diagrams Intro"
              },
              {
                "t": 14153,
                "title": "Designing an ER Diagram"
              },
              {
                "t": 14914,
                "title": "Converting ER Diagrams to Schemas"
              }
            ]
          },
          {
            "v": "qbLc5a9jdXo",
            "title": "REST API Crash Course + Full Python API Tutorial",
            "channel": "Caleb Curry",
            "seconds": 3117,
            "note": "APIs are the integration surface. Build the example.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 315,
                "title": "API App example"
              },
              {
                "t": 555,
                "title": "Why an API is important"
              },
              {
                "t": 900,
                "title": "HTTP methods"
              },
              {
                "t": 1005,
                "title": "POST vs PUT"
              },
              {
                "t": 1256,
                "title": "Consume the StackOverflow API"
              },
              {
                "t": 1664,
                "title": "Setting up our own Python API"
              },
              {
                "t": 1873,
                "title": "GET request setup"
              },
              {
                "t": 1924,
                "title": "Database model setup for SQLAlchemy"
              },
              {
                "t": 2350,
                "title": "GET data with query.all"
              },
              {
                "t": 2516,
                "title": "GET data by ID with parameter"
              },
              {
                "t": 2659,
                "title": "Developer tools network Intro"
              },
              {
                "t": 2703,
                "title": "POST a new record"
              },
              {
                "t": 2835,
                "title": "Postman Introduction"
              },
              {
                "t": 2961,
                "title": "DELETE data"
              },
              {
                "t": 3106,
                "title": "Conclusion"
              }
            ]
          },
          {
            "v": "7iHl71nt49o",
            "title": "How to Design APIs Like a Senior Engineer",
            "channel": "Hayk Simonyan",
            "seconds": 5001,
            "note": "REST, GraphQL, auth, security in one pass.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 56,
                "title": "API Design Fundamentals"
              },
              {
                "t": 1097,
                "title": "API Protocols"
              },
              {
                "t": 1810,
                "title": "Transport Layer: TCP & UDP"
              },
              {
                "t": 2121,
                "title": "RESTful API Design"
              },
              {
                "t": 3073,
                "title": "GraphQL API Design"
              },
              {
                "t": 3422,
                "title": "Authentication"
              },
              {
                "t": 3846,
                "title": "Authorization"
              },
              {
                "t": 4488,
                "title": "Security"
              }
            ]
          },
          {
            "v": "ZV5yTm4pT8g",
            "title": "OAuth 2 Explained In Simple Terms",
            "channel": "ByteByteGo",
            "seconds": 272,
            "note": "Exactly the auth flow enterprise SSO runs on.",
            "chapters": []
          },
          {
            "v": "mrkQ5iLb4DM",
            "title": "What is a Webhook? Webhooks for Beginners",
            "channel": "Mehul Mohan",
            "seconds": 606,
            "note": "Webhooks are half of integration glue.",
            "chapters": [
              {
                "t": 0,
                "title": "Teaser"
              },
              {
                "t": 27,
                "title": "What is Webhooks?"
              },
              {
                "t": 75,
                "title": "Example (Codedamn)"
              },
              {
                "t": 225,
                "title": "How Webhooks works?"
              },
              {
                "t": 429,
                "title": "Conclusion"
              },
              {
                "t": 586,
                "title": "Outro"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "p2",
    "n": "02",
    "tag": "The craft · AI toolkit",
    "title": "The LLM toolkit",
    "blurb": "Your raw material is the model. Prompting that survives users, outputs your code can parse, and the token math that decides what a workflow costs at the customer's volume.",
    "sources": [
      "vibe F2–F3",
      "roadmap.sh AI Engineering: LLMs to Production"
    ],
    "stations": [
      {
        "id": "p2-s0",
        "title": "How LLMs actually work",
        "goal": "Enough of the internals to reason about failure, cost and context — not a research course.",
        "concepts": [
          "Tokens",
          "Transformers & attention",
          "Embeddings",
          "Context windows",
          "Why models hallucinate"
        ],
        "build": "Estimate the token count and monthly bill for classifying 50K support tickets/day, then defend the model choice.",
        "res": [
          {
            "v": "zjkBMFhNj_g",
            "title": "[1hr Talk] Intro to Large Language Models",
            "channel": "Andrej Karpathy",
            "seconds": 3588,
            "note": "The canonical one-hour mental model. Watch first.",
            "chapters": [
              {
                "t": 0,
                "title": "Intro: Large Language Model (LLM) talk"
              },
              {
                "t": 20,
                "title": "LLM Inference"
              },
              {
                "t": 257,
                "title": "LLM Training"
              },
              {
                "t": 538,
                "title": "LLM dreams"
              },
              {
                "t": 682,
                "title": "How do they work?"
              },
              {
                "t": 854,
                "title": "Finetuning into an Assistant"
              },
              {
                "t": 1072,
                "title": "Summary so far"
              },
              {
                "t": 1265,
                "title": "Appendix: Comparisons, Labeling docs, RLHF, Synthetic data, Leaderboard"
              },
              {
                "t": 1543,
                "title": "LLM Scaling Laws"
              },
              {
                "t": 1663,
                "title": "Tool Use (Browser, Calculator, Interpreter, DALL-E)"
              },
              {
                "t": 2012,
                "title": "Multimodality (Vision, Audio)"
              },
              {
                "t": 2100,
                "title": "Thinking, System 1/2"
              },
              {
                "t": 2282,
                "title": "Self-improvement, LLM AlphaGo"
              },
              {
                "t": 2445,
                "title": "LLM Customization, GPTs store"
              },
              {
                "t": 2535,
                "title": "LLM OS"
              },
              {
                "t": 2743,
                "title": "LLM Security Intro"
              },
              {
                "t": 2774,
                "title": "Jailbreaks"
              },
              {
                "t": 3090,
                "title": "Prompt Injection"
              },
              {
                "t": 3383,
                "title": "Data poisoning"
              },
              {
                "t": 3517,
                "title": "LLM Security conclusions"
              },
              {
                "t": 3563,
                "title": "Outro"
              }
            ]
          },
          {
            "v": "wjZofJX0v4M",
            "title": "Transformers, the tech behind LLMs",
            "channel": "3Blue1Brown",
            "seconds": 1634,
            "note": "Visual, rigorous intuition for attention. Best transformer explainer.",
            "chapters": [
              {
                "t": 0,
                "title": "Predict, sample, repeat"
              },
              {
                "t": 183,
                "title": "Inside a transformer"
              },
              {
                "t": 396,
                "title": "Chapter layout"
              },
              {
                "t": 440,
                "title": "The premise of Deep Learning"
              },
              {
                "t": 747,
                "title": "Word embeddings"
              },
              {
                "t": 1105,
                "title": "Embeddings beyond words"
              },
              {
                "t": 1222,
                "title": "Unembedding"
              },
              {
                "t": 1342,
                "title": "Softmax with temperature"
              },
              {
                "t": 1563,
                "title": "Up next"
              }
            ]
          },
          {
            "v": "LPZh9BOjkQs",
            "title": "Large Language Models explained briefly",
            "channel": "3Blue1Brown",
            "seconds": 478,
            "note": "Short version if you only have 8 minutes.",
            "chapters": [
              {
                "t": 0,
                "title": "How chatbots work"
              },
              {
                "t": 35,
                "title": "Large language models"
              },
              {
                "t": 88,
                "title": "Training and parameters"
              },
              {
                "t": 128,
                "title": "Learning through refinement"
              },
              {
                "t": 198,
                "title": "Computational scale"
              },
              {
                "t": 226,
                "title": "Pre-training and RLHF"
              },
              {
                "t": 255,
                "title": "The role of GPUs"
              },
              {
                "t": 282,
                "title": "Transformer architecture"
              },
              {
                "t": 338,
                "title": "Attention mechanism"
              },
              {
                "t": 387,
                "title": "Emergent behavior"
              },
              {
                "t": 425,
                "title": "Further learning resources"
              }
            ]
          },
          {
            "v": "djp4205tHGU",
            "title": "How to choose an embedding model",
            "channel": "Weaviate",
            "seconds": 244,
            "note": "Embeddings drive retrieval; the choice has real quality/cost consequences.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to embeddings"
              },
              {
                "t": 49,
                "title": "Choosing an embedding model"
              },
              {
                "t": 88,
                "title": "Model tuning and application"
              },
              {
                "t": 121,
                "title": "Closed vs open source models"
              },
              {
                "t": 150,
                "title": "Model size and performance"
              },
              {
                "t": 184,
                "title": "Tools and benchmarking"
              },
              {
                "t": 220,
                "title": "Scaling and final thoughts"
              }
            ]
          },
          {
            "v": "8KrTO9bS91s",
            "title": "Complete Tutorial on Vector Databases (Chroma, Pinecone, Weaviate)",
            "channel": "DSwithBappy",
            "seconds": 6927,
            "note": "Practical: vector DBs are the storage layer under RAG.",
            "chapters": []
          }
        ]
      },
      {
        "id": "p2-s1",
        "title": "Prompting & context engineering",
        "goal": "Write prompts that hold up with real users, then engineer the whole context window.",
        "concepts": [
          "Production prompting",
          "System prompts",
          "Context assembly",
          "Agent prompting",
          "Iterative refinement"
        ],
        "build": "Take one prompt and rewrite it with: role, explicit output contract, and a failure path when the input is ambiguous.",
        "res": [
          {
            "v": "ysPbXH0LpIE",
            "title": "Prompting 101 | Code w/ Claude",
            "channel": "Anthropic",
            "seconds": 1493,
            "note": "Anthropic's own fundamentals — the practical baseline.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 88,
                "title": "Setting the stage"
              },
              {
                "t": 237,
                "title": "Prompt structure"
              },
              {
                "t": 340,
                "title": "Task context"
              },
              {
                "t": 527,
                "title": "Background detail"
              },
              {
                "t": 787,
                "title": "Examples"
              },
              {
                "t": 955,
                "title": "Reminders"
              },
              {
                "t": 1204,
                "title": "Output Formatting"
              }
            ]
          },
          {
            "v": "XSZP9GhhuAc",
            "title": "Prompting for Agents | Code w/ Claude",
            "channel": "Anthropic",
            "seconds": 1767,
            "note": "Same rigor applied to agents.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 403,
                "title": "Jeremys introduction"
              },
              {
                "t": 426,
                "title": "Thinking like your agents"
              },
              {
                "t": 955,
                "title": "Tools"
              },
              {
                "t": 1009,
                "title": "Example"
              },
              {
                "t": 1042,
                "title": "Demo"
              },
              {
                "t": 1217,
                "title": "eval"
              },
              {
                "t": 1568,
                "title": "QA"
              }
            ]
          },
          {
            "v": "2BpCk4d2Cc0",
            "title": "Prompt Engineering Full Course",
            "channel": "Tech With Tim",
            "seconds": 2264,
            "note": "Full-course version if you want the beginner on-ramp.",
            "chapters": [
              {
                "t": 0,
                "title": "Intro"
              },
              {
                "t": 104,
                "title": "What is Prompt Engineering"
              },
              {
                "t": 247,
                "title": "How to Prompt Faster"
              },
              {
                "t": 425,
                "title": "How LLMs \"Think\""
              },
              {
                "t": 640,
                "title": "Steering vs Commanding"
              },
              {
                "t": 713,
                "title": "Be Specific & Set the Scene"
              },
              {
                "t": 872,
                "title": "Few-Shot Prompting"
              },
              {
                "t": 1090,
                "title": "Chain of Thought"
              },
              {
                "t": 1205,
                "title": "Structured Output"
              },
              {
                "t": 1324,
                "title": "Constraints & Negatives"
              },
              {
                "t": 1459,
                "title": "Iterative Refinement"
              },
              {
                "t": 1522,
                "title": "Interview Style Prompting"
              },
              {
                "t": 1753,
                "title": "Advanced Techniques & Parameters"
              },
              {
                "t": 2104,
                "title": "Common Mistakes"
              }
            ]
          },
          {
            "v": "BBPQYtR7oUk",
            "title": "Context engineering explained",
            "channel": "Google Cloud Tech",
            "seconds": 605,
            "note": "Context engineering is the real skill now, not prompt tweaking.",
            "chapters": [
              {
                "t": 0,
                "title": "Bigger prompts don't fix bad AI"
              },
              {
                "t": 47,
                "title": "What is context engineering?"
              },
              {
                "t": 99,
                "title": "Why context size isn't everything"
              },
              {
                "t": 138,
                "title": "Four failure modes: Poisoning, distraction, confusion, clash"
              },
              {
                "t": 178,
                "title": "Context engineering vs prompt engineering"
              },
              {
                "t": 256,
                "title": "The seven components of a context stack"
              },
              {
                "t": 302,
                "title": "Building LogLook: A realistic agent example"
              },
              {
                "t": 420,
                "title": "The 4 steps of context engineering"
              },
              {
                "t": 428,
                "title": "Step 1: Write"
              },
              {
                "t": 470,
                "title": "Step 2: Select"
              },
              {
                "t": 514,
                "title": "Step 3: Compress"
              },
              {
                "t": 554,
                "title": "Step 4: Isolate"
              },
              {
                "t": 590,
                "title": "Curate, don't dump"
              }
            ]
          },
          {
            "v": "4GiqzUHD5AA",
            "title": "Context Engineering for Agents",
            "channel": "LangChain",
            "seconds": 1326,
            "note": "How context is assembled for tool-using agents.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to context"
              },
              {
                "t": 88,
                "title": "Agent context challenges"
              },
              {
                "t": 205,
                "title": "Writing context strategies"
              },
              {
                "t": 371,
                "title": "Selecting context approaches"
              },
              {
                "t": 596,
                "title": "Compressing context techniques"
              },
              {
                "t": 692,
                "title": "Isolating context methods"
              },
              {
                "t": 849,
                "title": "Implementing with LangGraph"
              }
            ]
          },
          {
            "v": "Qx0fCqpkBus",
            "title": "What Is Context Engineering? Why It Matters for AI Agents",
            "channel": "IBM Technology",
            "seconds": 597,
            "note": "Short conceptual complement.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to context"
              },
              {
                "t": 93,
                "title": "Prompt vs context"
              },
              {
                "t": 153,
                "title": "Why context matters"
              },
              {
                "t": 280,
                "title": "Context processing"
              },
              {
                "t": 350,
                "title": "Context management"
              },
              {
                "t": 454,
                "title": "Practical case study"
              }
            ]
          }
        ]
      },
      {
        "id": "p2-s2",
        "title": "Structured outputs, model choice & cost math",
        "goal": "Get JSON your code can trust and pick models by numbers, not vibes.",
        "concepts": [
          "JSON schema / structured outputs",
          "Pydantic",
          "Model selection",
          "Fine-tune vs RAG",
          "Cost per workflow"
        ],
        "build": "Design an output schema for a customer workflow and compute cost-per-run at their volume, including retries.",
        "res": [
          {
            "v": "fuMKrKlaku4",
            "title": "OpenAI Structured Output — All You Need to Know",
            "channel": "Dave Ebbelaar",
            "seconds": 1486,
            "note": "The practical way to make model output parseable.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 79,
                "title": "What is Structured Output?"
              },
              {
                "t": 213,
                "title": "Instructor Library"
              },
              {
                "t": 268,
                "title": "Benefits of Structured Output"
              },
              {
                "t": 301,
                "title": "Structured Output vs JSON Mode"
              },
              {
                "t": 335,
                "title": "When to Use Structured Output"
              },
              {
                "t": 435,
                "title": "Response Format JSON Schema"
              },
              {
                "t": 873,
                "title": "Response Format with Pydantic"
              }
            ]
          },
          {
            "v": "00Q0G84kq3M",
            "title": "RAG vs. Fine Tuning",
            "channel": "IBM Technology",
            "seconds": 537,
            "note": "The decision FDEs defend constantly: know-versus-behave.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 66,
                "title": "Retrieval Augmented Generation"
              },
              {
                "t": 205,
                "title": "Use Cases"
              },
              {
                "t": 357,
                "title": "Application Priorities"
              }
            ]
          },
          {
            "v": "-W2JdSl1v48",
            "title": "Is Fine-Tuning Still Needed? LLMs, RAG & LoRA",
            "channel": "IBM Technology",
            "seconds": 652,
            "note": "When fine-tuning earns its place vs prompting/RAG.",
            "chapters": []
          }
        ]
      }
    ]
  },
  {
    "id": "p3",
    "n": "03",
    "tag": "Build the deliverable",
    "title": "RAG, agents & integration",
    "blurb": "The default FDE deliverables: the customer's knowledge answerable, workflows automated, and the whole thing glued into systems that predate APIs.",
    "sources": [
      "vibe F4–F6",
      "roadmap.sh Building & Deploying AI Agents"
    ],
    "stations": [
      {
        "id": "p3-s0",
        "title": "Enterprise RAG",
        "goal": "Build retrieval the customer's knowledge actually answers from — with permissions and citations.",
        "concepts": [
          "Chunking",
          "Retrieval & reranking",
          "Grounded citations",
          "Access control",
          "Retrieval quality"
        ],
        "build": "Design RAG over a company wiki where sales must not see HR docs. Decide where permission filtering happens: index, query, or prompt.",
        "res": [
          {
            "v": "T-D1OfcDW1M",
            "title": "What is Retrieval-Augmented Generation (RAG)?",
            "channel": "IBM Technology",
            "seconds": 396,
            "note": "Crisp conceptual definition first.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 18,
                "title": "What is RAG"
              },
              {
                "t": 42,
                "title": "An anecdote"
              },
              {
                "t": 82,
                "title": "Two problems"
              },
              {
                "t": 138,
                "title": "Large language models"
              },
              {
                "t": 263,
                "title": "How does RAG help"
              }
            ]
          },
          {
            "v": "swvzKSOEluc",
            "title": "RAG Crash Course for Beginners",
            "channel": "KodeKloud",
            "seconds": 3530,
            "note": "Best free hands-on RAG build for beginners.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to RAG Tutorial"
              },
              {
                "t": 75,
                "title": "Simplest RAG Explanation"
              },
              {
                "t": 212,
                "title": "When not to RAG?"
              },
              {
                "t": 460,
                "title": "What is RAG?"
              },
              {
                "t": 709,
                "title": "Free Lab 1: Keyword Search (TF-IDF & BM25)"
              },
              {
                "t": 902,
                "title": "What are Semantic Search?"
              },
              {
                "t": 1014,
                "title": "Understanding Embedding Models"
              },
              {
                "t": 1140,
                "title": "Embeddings and Vectors"
              },
              {
                "t": 1260,
                "title": "The Dot Product"
              },
              {
                "t": 1560,
                "title": "Lab 2: Embedding Models"
              },
              {
                "t": 1790,
                "title": "Vector Databases Explained"
              },
              {
                "t": 1984,
                "title": "ChromaDB Tutorial"
              },
              {
                "t": 2085,
                "title": "Lab 3: Vector Databases"
              },
              {
                "t": 2297,
                "title": "Chunking Explained"
              },
              {
                "t": 2379,
                "title": "Document Chunking Strategies"
              },
              {
                "t": 2602,
                "title": "Lab 4: Document Chunking"
              },
              {
                "t": 2925,
                "title": "Build your RAG Architecture"
              },
              {
                "t": 2971,
                "title": "Lab 5: Complete RAG Pipeline"
              },
              {
                "t": 3110,
                "title": "Caching, Monitoring and Error Handling"
              },
              {
                "t": 3394,
                "title": "RAG in Production"
              },
              {
                "t": 3488,
                "title": "Conclusion"
              }
            ]
          },
          {
            "v": "sVcwVQRHIc8",
            "title": "Learn RAG From Scratch — from a LangChain Engineer",
            "channel": "freeCodeCamp",
            "seconds": 9191,
            "note": "The thorough build: indexing, retrieval, query translation (Multi-Query, HyDE, RAG-Fusion).",
            "chapters": [
              {
                "t": 0,
                "title": "Overview"
              },
              {
                "t": 353,
                "title": "Indexing"
              },
              {
                "t": 640,
                "title": "Retrieval"
              },
              {
                "t": 952,
                "title": "Generation"
              },
              {
                "t": 1334,
                "title": "Query Translation (Multi-Query)"
              },
              {
                "t": 1700,
                "title": "Query Translation (RAG Fusion)"
              },
              {
                "t": 2037,
                "title": "Query Translation (Decomposition)"
              },
              {
                "t": 2431,
                "title": "Query Translation (Step Back)"
              },
              {
                "t": 2844,
                "title": "Query Translation (HyDE)"
              },
              {
                "t": 3127,
                "title": "Routing"
              },
              {
                "t": 3548,
                "title": "Query Construction"
              },
              {
                "t": 3905,
                "title": "Indexing (Multi Representation)"
              },
              {
                "t": 4299,
                "title": "Indexing (RAPTOR)"
              },
              {
                "t": 4759,
                "title": "Indexing (ColBERT)"
              },
              {
                "t": 5192,
                "title": "CRAG"
              },
              {
                "t": 6249,
                "title": "Adaptive RAG"
              },
              {
                "t": 7922,
                "title": "The future of RAG"
              }
            ]
          },
          {
            "v": "mHxLXzYjQRE",
            "title": "Production RAG with LangChain & Vector Databases — Full Course",
            "channel": "freeCodeCamp",
            "seconds": 27519,
            "note": "Move from toy to production (very long; work through it over days).",
            "chapters": [
              {
                "t": 0,
                "title": "Intro"
              },
              {
                "t": 104,
                "title": "Full RAG Overview"
              },
              {
                "t": 507,
                "title": "Development Environment Setup"
              },
              {
                "t": 935,
                "title": "Document Loader - Overview"
              },
              {
                "t": 1707,
                "title": "Document Processing Pipeline - RAG Indexing Pipeline"
              },
              {
                "t": 2892,
                "title": "Embedding Dimensions - Deep Dive"
              },
              {
                "t": 3665,
                "title": "Hands-on - Create a Vector DB Using Chroma"
              },
              {
                "t": 4668,
                "title": "Similarity Search with Scores"
              },
              {
                "t": 5072,
                "title": "Building a Basic RAG System"
              },
              {
                "t": 5596,
                "title": "Debugging RAG Systems"
              },
              {
                "t": 6826,
                "title": "Hybrid Search"
              },
              {
                "t": 8470,
                "title": "Observability - Introduction"
              },
              {
                "t": 8996,
                "title": "LangSmith Setup"
              },
              {
                "t": 9476,
                "title": "RAG Optimization"
              },
              {
                "t": 11578,
                "title": "Scaling RAG Systems"
              },
              {
                "t": 12215,
                "title": "The Real Costs of Vector Search"
              },
              {
                "t": 12797,
                "title": "Production Hosting"
              },
              {
                "t": 12960,
                "title": "Supabase and PGVector - Set up and Introduction"
              },
              {
                "t": 14681,
                "title": "Three Pillars of Production Visibility"
              },
              {
                "t": 15371,
                "title": "Production Project"
              },
              {
                "t": 16476,
                "title": "Set up the Security Layer"
              },
              {
                "t": 19666,
                "title": "Test the Security Layer"
              },
              {
                "t": 20496,
                "title": "Security Checklist"
              },
              {
                "t": 21969,
                "title": "Advanced RAG Topics - Long Context Models vs RAG"
              },
              {
                "t": 22469,
                "title": "Contextual Retrieval"
              },
              {
                "t": 23066,
                "title": "Late Chunking vs Early Chunking"
              },
              {
                "t": 24124,
                "title": "Agentic RAG - Self-Correcting Retrieval"
              },
              {
                "t": 25485,
                "title": "GraphRAG - Multi-hop Reasoning"
              },
              {
                "t": 26668,
                "title": "Multimodal RAG - ColPali - Vision-Based Document RAG"
              },
              {
                "t": 27285,
                "title": "Summary - Advanced RAG (Current State)"
              },
              {
                "t": 27422,
                "title": "RAG Evolution - Overview"
              },
              {
                "t": 27515,
                "title": "Outro"
              }
            ]
          },
          {
            "v": "4pUYfY-b5CQ",
            "title": "Vector Databases Explained: The Complete Guide for 2026",
            "channel": "Aishwarya Srinivasan",
            "seconds": 593,
            "note": "Which vector store, and the tradeoffs.",
            "chapters": [
              {
                "t": 0,
                "title": "What Is a Vector Database?"
              },
              {
                "t": 44,
                "title": "Who I Am"
              },
              {
                "t": 63,
                "title": "The Problem"
              },
              {
                "t": 122,
                "title": "What Is a Vector?"
              },
              {
                "t": 248,
                "title": "RAG Explained"
              },
              {
                "t": 347,
                "title": "Chunking Strategy"
              },
              {
                "t": 379,
                "title": "Which Vector DB?"
              },
              {
                "t": 446,
                "title": "Beyond RAG"
              },
              {
                "t": 499,
                "title": "Closing"
              }
            ]
          }
        ]
      },
      {
        "id": "p3-s1",
        "title": "Agents, workflows & tool calling",
        "goal": "Automate past Q&A — and judge when a boring script beats an agent.",
        "concepts": [
          "Tool calling",
          "Plan-act-observe",
          "Workflow vs agent",
          "Bounded autonomy",
          "Error handling"
        ],
        "build": "Take 'an agent for invoice processing' — sketch the workflow, then mark which steps deserve a model and which deserve code.",
        "res": [
          {
            "v": "qU3fmidNbJE",
            "title": "AI Agents Fundamentals In 21 Minutes",
            "channel": "Tina Huang",
            "seconds": 1287,
            "note": "Fastest clear intro to agentic + multi-agent patterns.",
            "chapters": [
              {
                "t": 0,
                "title": "Intro"
              },
              {
                "t": 38,
                "title": "Video overview"
              },
              {
                "t": 73,
                "title": "AI agents definition"
              },
              {
                "t": 225,
                "title": "Agentic design patterns"
              },
              {
                "t": 564,
                "title": "Multi-agent design patterns"
              },
              {
                "t": 1024,
                "title": "Building a no code agent in n8n"
              },
              {
                "t": 1186,
                "title": "Ways to use AI agents"
              },
              {
                "t": 1265,
                "title": "Quiz"
              }
            ]
          },
          {
            "v": "ZaPbP9DwBOE",
            "title": "Don't learn AI Agents without Learning these Fundamentals",
            "channel": "KodeKloud",
            "seconds": 3400,
            "note": "The fundamentals most agent builders skip.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to AI Agents"
              },
              {
                "t": 40,
                "title": "How LLMs work in real time?"
              },
              {
                "t": 296,
                "title": "Embeddings & Vector Representations"
              },
              {
                "t": 356,
                "title": "How LangChain works?"
              },
              {
                "t": 612,
                "title": "Practice Labs - Your First AI API Call"
              },
              {
                "t": 897,
                "title": "Practice Labs - LangChain"
              },
              {
                "t": 1077,
                "title": "Prompt Engineering Techniques"
              },
              {
                "t": 1281,
                "title": "Practice Labs - Master Prompt Engineering"
              },
              {
                "t": 1486,
                "title": "Vector Databases Deep Dive"
              },
              {
                "t": 1887,
                "title": "Practice Labs - Build Semantic Search Engine"
              },
              {
                "t": 2115,
                "title": "RAG (Retrieval Augmented Generation)"
              },
              {
                "t": 2294,
                "title": "Practice Labs - RAG Implementation"
              },
              {
                "t": 2534,
                "title": "LangGraph for AI Workflows"
              },
              {
                "t": 2751,
                "title": "Practice Labs - Build Stateful AI Workflow"
              },
              {
                "t": 2931,
                "title": "Model Context Protocol (MCP)"
              },
              {
                "t": 3116,
                "title": "Practice Labs - Advanced MCP Concepts"
              },
              {
                "t": 3321,
                "title": "Conclusion"
              }
            ]
          },
          {
            "v": "uhJJgc-0iTQ",
            "title": "Building more effective AI agents",
            "channel": "Anthropic",
            "seconds": 1138,
            "note": "Anthropic's practical agent guidance.",
            "chapters": [
              {
                "t": 0,
                "title": "Introductions"
              },
              {
                "t": 35,
                "title": "Training Claude to tackle agentic tasks"
              },
              {
                "t": 90,
                "title": "Making Claude more autonomous with code"
              },
              {
                "t": 200,
                "title": "Using the Claude Agent SDK to build agents"
              },
              {
                "t": 300,
                "title": "Tips for using Agent Skills"
              },
              {
                "t": 400,
                "title": "The evolution of workflows and agents (workflows of agents)"
              },
              {
                "t": 510,
                "title": "The value of simple agent architectures"
              },
              {
                "t": 570,
                "title": "Building multi-agent systems: orchestrators, subagents, and tool calling"
              },
              {
                "t": 700,
                "title": "Training Claude to use subagents"
              },
              {
                "t": 745,
                "title": "Multi-agent use design patterns: parallelization, MapReduce, and test-time compute"
              },
              {
                "t": 800,
                "title": "Coordinating problem solving with tools and subagents"
              },
              {
                "t": 855,
                "title": "Common agent failure modes"
              },
              {
                "t": 900,
                "title": "Best practices for getting started with building agents (context engineering, MCPs, and tools)"
              },
              {
                "t": 1035,
                "title": "The future of agents: coding, computer use, and beyond"
              }
            ]
          },
          {
            "v": "D7_ipDqhtwk",
            "title": "How We Build Effective Agents — Barry Zhang, Anthropic",
            "channel": "AI Engineer",
            "seconds": 909,
            "note": "Conference talk version; the workflow-vs-agent judgment call.",
            "chapters": []
          },
          {
            "v": "aqdWSYWC_LI",
            "title": "OpenAI Function Calling — Full Beginner Tutorial",
            "channel": "Dave Ebbelaar",
            "seconds": 1704,
            "note": "Tool calling implemented, end to end.",
            "chapters": []
          }
        ]
      },
      {
        "id": "p3-s2",
        "title": "MCP & integration glue",
        "goal": "Connect agents to real systems: standardized tools, APIs, auth, legacy.",
        "concepts": [
          "Model Context Protocol",
          "MCP servers",
          "API/webhook plumbing",
          "SSO / OAuth / service accounts",
          "Legacy archaeology"
        ],
        "build": "Design the MCP/tool layer for an assistant that reads CRM records and writes follow-up tasks. List every auth hop and failure point.",
        "res": [
          {
            "v": "E2DEHOEbzks",
            "title": "Model Context Protocol (MCP) Explained for Beginners",
            "channel": "KodeKloud",
            "seconds": 1450,
            "note": "Best hands-on MCP intro with a live demo.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to AI Agents & MCPs"
              },
              {
                "t": 40,
                "title": "ChatGPT Breakdown"
              },
              {
                "t": 83,
                "title": "Why LLMs Can't Take Action"
              },
              {
                "t": 188,
                "title": "What Are AI Agents? The Game-Changing Solution"
              },
              {
                "t": 228,
                "title": "Real-world Agent Examples: IDEs, Cursor, GitHub Copilot"
              },
              {
                "t": 295,
                "title": "How to get started with AI Agents?"
              },
              {
                "t": 347,
                "title": "Understanding APIs & Tools"
              },
              {
                "t": 587,
                "title": "Model Context Protocols (MCPs): The Universal Solution"
              },
              {
                "t": 762,
                "title": "A2A Protocol: The Next Level"
              },
              {
                "t": 839,
                "title": "Real-world Use Cases"
              },
              {
                "t": 925,
                "title": "Setting Up Your First MCP - Hands on Demo"
              },
              {
                "t": 1148,
                "title": "Lab Demo: Configuring Client with Flight MCP"
              }
            ]
          },
          {
            "v": "tzrwxLNHtRY",
            "title": "Model Context Protocol Clearly Explained | MCP Beyond the Hype",
            "channel": "codebasics",
            "seconds": 904,
            "note": "What MCP is and where it fits.",
            "chapters": []
          },
          {
            "v": "eur8dUO9mvE",
            "title": "What is MCP? Integrate AI Agents with Databases & APIs",
            "channel": "IBM Technology",
            "seconds": 226,
            "note": "Short framing; pair with the two above.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to MCP"
              },
              {
                "t": 19,
                "title": "MCP Architecture Components"
              },
              {
                "t": 96,
                "title": "Practical workflow example"
              },
              {
                "t": 195,
                "title": "Conclusion and advice"
              }
            ]
          },
          {
            "v": "7iHl71nt49o",
            "title": "How to Design APIs Like a Senior Engineer",
            "channel": "Hayk Simonyan",
            "seconds": 5001,
            "note": "Integration work is API work — this is the senior mental model (also in Phase 1).",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 56,
                "title": "API Design Fundamentals"
              },
              {
                "t": 1097,
                "title": "API Protocols"
              },
              {
                "t": 1810,
                "title": "Transport Layer: TCP & UDP"
              },
              {
                "t": 2121,
                "title": "RESTful API Design"
              },
              {
                "t": 3073,
                "title": "GraphQL API Design"
              },
              {
                "t": 3422,
                "title": "Authentication"
              },
              {
                "t": 3846,
                "title": "Authorization"
              },
              {
                "t": 4488,
                "title": "Security"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "p4",
    "n": "04",
    "tag": "Deploy & operate",
    "title": "Ship it into hostile territory",
    "blurb": "Their VPC, their on-prem cluster, an air-gapped room, a security review. And the number that decides renewal: does it still work after you change it?",
    "sources": [
      "vibe T3–T5, P2–P3",
      "roadmap.sh Cloud Infra, MLOps, AI Security, Evaluating AI Systems"
    ],
    "stations": [
      {
        "id": "p4-s0",
        "title": "Containers, cloud & deploy-anywhere",
        "goal": "Package and run the thing wherever the customer allows it.",
        "concepts": [
          "Docker",
          "Kubernetes",
          "VPC / on-prem / air-gapped",
          "Model access constraints",
          "LLMOps lifecycle"
        ],
        "build": "The customer allows no data egress. Redesign your architecture: where does the model run, and what breaks vs your SaaS setup?",
        "res": [
          {
            "v": "3c-iBn73dDE",
            "title": "Docker Tutorial for Beginners [FULL COURSE in 3 Hours]",
            "channel": "TechWorld with Nana",
            "seconds": 9975,
            "note": "The standard Docker course. Build the image, don't just watch.",
            "chapters": [
              {
                "t": 0,
                "title": "Intro and Course Overview"
              },
              {
                "t": 118,
                "title": "What is Docker?"
              },
              {
                "t": 656,
                "title": "What is a Container?"
              },
              {
                "t": 1180,
                "title": "Docker vs Virtual Machine"
              },
              {
                "t": 1433,
                "title": "Docker Installation"
              },
              {
                "t": 2522,
                "title": "Main Docker Commands"
              },
              {
                "t": 3435,
                "title": "Debugging a Container"
              },
              {
                "t": 3999,
                "title": "Demo Project Overview - Docker in Practice"
              },
              {
                "t": 4208,
                "title": "Developing with Containers"
              },
              {
                "t": 5389,
                "title": "Docker Compose - Running multiple services"
              },
              {
                "t": 6122,
                "title": "Dockerfile - Building our own Docker Image"
              },
              {
                "t": 7476,
                "title": "Private Docker Repository - Pushing our built Docker Image into a private Registry on AWS"
              },
              {
                "t": 8346,
                "title": "Deploy our containerized app"
              },
              {
                "t": 8846,
                "title": "Docker Volumes - Persist data in Docker"
              },
              {
                "t": 9183,
                "title": "Volumes Demo - Configure persistence for our demo project"
              },
              {
                "t": 9913,
                "title": "Wrap Up"
              }
            ]
          },
          {
            "v": "X48VuDVv0do",
            "title": "Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]",
            "channel": "TechWorld with Nana",
            "seconds": 13015,
            "note": "Pods, services, config, scaling, debugging — the K8s floor.",
            "chapters": [
              {
                "t": 0,
                "title": "Course Overview"
              },
              {
                "t": 138,
                "title": "What is K8s"
              },
              {
                "t": 320,
                "title": "Main K8s Components"
              },
              {
                "t": 1349,
                "title": "K8s Architecture"
              },
              {
                "t": 2087,
                "title": "Minikube and kubectl - Local Setup"
              },
              {
                "t": 2692,
                "title": "Main Kubectl Commands - K8s CLI"
              },
              {
                "t": 3723,
                "title": "K8s YAML Configuration File"
              },
              {
                "t": 4576,
                "title": "Demo Project: MongoDB and MongoExpress"
              },
              {
                "t": 6376,
                "title": "Organizing your components with K8s Namespaces"
              },
              {
                "t": 7312,
                "title": "K8s Ingress explained"
              },
              {
                "t": 8657,
                "title": "Helm - Package Manager"
              },
              {
                "t": 9487,
                "title": "Persisting Data in K8s with Volumes"
              },
              {
                "t": 10718,
                "title": "Deploying Stateful Apps with StatefulSet"
              },
              {
                "t": 11623,
                "title": "K8s Services explained"
              }
            ]
          },
          {
            "v": "cvPEiPt7HXo",
            "title": "Large Language Model Operations (LLMOps) Explained",
            "channel": "IBM Technology",
            "seconds": 415,
            "note": "How LLM ops differs from classic MLOps.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 67,
                "title": "What is LLMOps"
              },
              {
                "t": 134,
                "title": "LLMOps Components"
              }
            ]
          },
          {
            "v": "SArBu9ik524",
            "title": "I am learning LLMOps for High Paying Opportunities in 2026",
            "channel": "Abhishek.Veeramalla",
            "seconds": 808,
            "note": "Career-framed LLMOps walkthrough; good motivation + map.",
            "chapters": []
          }
        ]
      },
      {
        "id": "p4-s1",
        "title": "Evals & observability",
        "goal": "Make 'is it still good?' a lookup, not an argument.",
        "concepts": [
          "Golden datasets",
          "Acceptance criteria",
          "LLM-as-judge",
          "RAGAS / retrieval metrics",
          "Tracing & monitoring"
        ],
        "build": "Define the eval for a contract-review assistant: 30 documents, what is measured, and the number below which you do not ship.",
        "res": [
          {
            "v": "a3SMraZWNNs",
            "title": "How to Systematically Setup LLM Evals (Metrics, Unit Tests, LLM-as-a-Judge)",
            "channel": "Dave Ebbelaar",
            "seconds": 3302,
            "note": "The most practical evals build on the list.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to Agentic AI Applications"
              },
              {
                "t": 114,
                "title": "Understanding LLM Evaluations"
              },
              {
                "t": 294,
                "title": "Core Challenges in LLM Development"
              },
              {
                "t": 474,
                "title": "Importance of Iteration and Improvement"
              },
              {
                "t": 561,
                "title": "Defining Evaluations in AI Systems"
              },
              {
                "t": 664,
                "title": "The Analyze, Measure, Improve Cycle"
              },
              {
                "t": 746,
                "title": "Levels of Evaluations"
              },
              {
                "t": 841,
                "title": "Unit Tests for LLMs"
              },
              {
                "t": 1073,
                "title": "Human and Model Evaluations"
              },
              {
                "t": 1364,
                "title": "Aligning LLM Evaluators"
              },
              {
                "t": 1742,
                "title": "Process for Building Automated Evaluators"
              },
              {
                "t": 1881,
                "title": "A/B Testing in AI Applications"
              },
              {
                "t": 2080,
                "title": "Evaluation Metrics Overview"
              },
              {
                "t": 2245,
                "title": "Common Mistakes to Avoid"
              },
              {
                "t": 2386,
                "title": "Key Principles for Success"
              },
              {
                "t": 2544,
                "title": "Conclusion and Next Steps"
              }
            ]
          },
          {
            "v": "TL527yTpxlk",
            "title": "Complete Beginner's Course on AI Evaluations in 50 Minutes",
            "channel": "Peter Yang",
            "seconds": 3108,
            "note": "Beginner-friendly framing of the whole eval discipline.",
            "chapters": [
              {
                "t": 0,
                "title": "What are AI evals and how to get good at them"
              },
              {
                "t": 172,
                "title": "The 4 types of AI evaluations everyone should know"
              },
              {
                "t": 368,
                "title": "Live demo: Building evals for a customer support agent"
              },
              {
                "t": 629,
                "title": "Using Anthropic's console to generate great prompts"
              },
              {
                "t": 913,
                "title": "Creating the evaluation criteria"
              },
              {
                "t": 1060,
                "title": "Adding human labels to the golden dataset"
              },
              {
                "t": 1865,
                "title": "Scaling evals with LLM-judge prompts"
              },
              {
                "t": 2301,
                "title": "How to align LLM judges with human judgment"
              }
            ]
          },
          {
            "v": "trfUBIDeI1Y",
            "title": "LLM as a Judge: Scaling AI Evaluation Strategies",
            "channel": "IBM Technology",
            "seconds": 369,
            "note": "Why and how LLM-as-judge works when labels are scarce.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to LLM judging"
              },
              {
                "t": 36,
                "title": "Evaluation strategies"
              },
              {
                "t": 122,
                "title": "Strategy selection analysis"
              },
              {
                "t": 155,
                "title": "Benefits of AI evaluation"
              },
              {
                "t": 231,
                "title": "Drawbacks and biases"
              },
              {
                "t": 310,
                "title": "Conclusion and best practices"
              }
            ]
          },
          {
            "v": "5fp6e5nhJRk",
            "title": "RAGAS: How to Evaluate a RAG Application Like a Pro",
            "channel": "Mervin Praison",
            "seconds": 518,
            "note": "RAG-specific metrics: faithfulness, answer relevance, context precision.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to RAGAS"
              },
              {
                "t": 38,
                "title": "How RAGAS Works: From Data Ingestion to Response Generation"
              },
              {
                "t": 100,
                "title": "Starting with RAGAS: Installation Guide"
              },
              {
                "t": 166,
                "title": "Configuring RAGAS: Step-by-Step Code Walkthrough"
              },
              {
                "t": 227,
                "title": "Evaluating AI with RAGAS: Understanding Metrics"
              },
              {
                "t": 330,
                "title": "Practical Example: Running RAGAS in Action"
              },
              {
                "t": 361,
                "title": "Results Analysis: Interpreting Output Data"
              },
              {
                "t": 451,
                "title": "What's Next? Upcoming Detailed Tutorials on RAGAS"
              }
            ]
          },
          {
            "v": "NebOSOTp-zA",
            "title": "Mastering LLM Chatbots And RAG Evaluation Crash Course",
            "channel": "Krish Naik",
            "seconds": 3972,
            "note": "Longer RAG-eval crash course to consolidate.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 1086,
                "title": "Metrics- LLM As A Judge"
              },
              {
                "t": 1578,
                "title": "Running Evaluation On Different Metrics"
              },
              {
                "t": 2055,
                "title": "Rag Evaluation Create DataSet For Rag"
              },
              {
                "t": 2993,
                "title": "RAG Evlauation Metrics"
              }
            ]
          }
        ]
      },
      {
        "id": "p4-s2",
        "title": "Security, guardrails & compliance",
        "goal": "Survive the security review and wire policy the model can't be argued out of.",
        "concepts": [
          "OWASP LLM Top 10",
          "Prompt injection",
          "PII & residency",
          "Guardrails as policy",
          "SOC 2 / GDPR / HIPAA literacy"
        ],
        "build": "Prepare the one-page answer to 'where does our data go?' for a RAG deployment — every hop, every store, every retention clock.",
        "res": [
          {
            "v": "cYuesqIKf9A",
            "title": "Explained: The OWASP Top 10 for Large Language Model Applications",
            "channel": "IBM Technology",
            "seconds": 862,
            "note": "The canonical risk list — know it by name.",
            "chapters": [
              {
                "t": 0,
                "title": "What is the OWASP Top 10 for LLMs?"
              },
              {
                "t": 85,
                "title": "Prompt Injection (Direct)"
              },
              {
                "t": 217,
                "title": "Prompt Injection (Indirect)"
              },
              {
                "t": 403,
                "title": "Insecure Output Handling"
              },
              {
                "t": 535,
                "title": "Training Data"
              },
              {
                "t": 706,
                "title": "Over Reliance"
              }
            ]
          },
          {
            "v": "gUNXZMcd2jU",
            "title": "OWASP's Top 10 Ways to Attack LLMs: AI Vulnerabilities Exposed",
            "channel": "IBM Technology",
            "seconds": 1512,
            "note": "Attack view: what actually goes wrong.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to AI threats"
              },
              {
                "t": 67,
                "title": "Prompt injection"
              },
              {
                "t": 422,
                "title": "Sensitive data disclosure"
              },
              {
                "t": 710,
                "title": "Supply chain vulnerabilities"
              },
              {
                "t": 910,
                "title": "Data and model poisoning"
              },
              {
                "t": 1150,
                "title": "Improper output handling"
              },
              {
                "t": 1216,
                "title": "Excessive agency"
              },
              {
                "t": 1286,
                "title": "System prompt leakage"
              },
              {
                "t": 1337,
                "title": "Vector database weaknesses"
              },
              {
                "t": 1381,
                "title": "LLM misinformation"
              },
              {
                "t": 1422,
                "title": "Unbounded consumption"
              }
            ]
          },
          {
            "v": "UftYcziWO3g",
            "title": "OWASP Agentic Top 10 Explained",
            "channel": "ByteMonk",
            "seconds": 1287,
            "note": "The agent-specific risks beyond classic LLM apps.",
            "chapters": [
              {
                "t": 0,
                "title": "The PocketOS incident: no hack, no breach"
              },
              {
                "t": 72,
                "title": "Building the agent: read-only first"
              },
              {
                "t": 120,
                "title": "ASI-01: Agent goal hijack"
              },
              {
                "t": 212,
                "title": "ASI-02/03: Tool misuse & credential abuse"
              },
              {
                "t": 430,
                "title": "Descope's Agent Identity Hub"
              },
              {
                "t": 579,
                "title": "ASI-04/05: Supply chain & code execution"
              },
              {
                "t": 711,
                "title": "ASI-06/07: Memory poisoning & inter-agent trust"
              },
              {
                "t": 972,
                "title": "ASI-09/10: Trust exploitation & rogue agents"
              }
            ]
          },
          {
            "v": "l5K4r_TJz_8",
            "title": "How to implement LLM guardrails for RAG applications",
            "channel": "IBM Developer",
            "seconds": 435,
            "note": "Guardrails concretely, for RAG.",
            "chapters": []
          },
          {
            "v": "ruiLq0OzjkI",
            "title": "Guardrails with LangChain: A Complete Crash Course",
            "channel": "Krish Naik",
            "seconds": 2295,
            "note": "Implementation path for guardrails + safe agents.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to guardrails"
              },
              {
                "t": 285,
                "title": "Deterministic vs model based"
              },
              {
                "t": 450,
                "title": "Guardrails as middleware"
              },
              {
                "t": 568,
                "title": "Types of agent hooks"
              },
              {
                "t": 830,
                "title": "Approaches demonstration"
              },
              {
                "t": 1159,
                "title": "PII detection middleware"
              },
              {
                "t": 1590,
                "title": "Human in the loop"
              },
              {
                "t": 1856,
                "title": "Custom guardrail hooks"
              },
              {
                "t": 2216,
                "title": "Layered guardrails"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "p5",
    "n": "05",
    "tag": "The field",
    "title": "Customer craft (the actual differentiator)",
    "blurb": "Deployments die politically before they die technically. This is the half of the job that separates an FDE from a backend engineer.",
    "sources": [
      "vibe T1–T2, T6, P1–P5"
    ],
    "stations": [
      {
        "id": "p5-s0",
        "title": "Discovery, scoping & customer data",
        "goal": "Turn a vague ask into a scoped, measurable pilot — then handle the data as it really is.",
        "concepts": [
          "Workflow shadowing",
          "Success metrics upfront",
          "Ruthless scoping",
          "Requirements gathering",
          "Technical documentation",
          "Kill criteria"
        ],
        "build": "A COO says 'we want AI for operations'. Write the five discovery questions that turn that into a scoped, measurable pilot.",
        "res": [
          {
            "v": "OTkP2JDeGWM",
            "title": "Customer Discovery: What Do You Ask",
            "channel": "Techstars",
            "seconds": 420,
            "note": "The questions that reveal the real problem behind the stated one.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 42,
                "title": "Ground Rules"
              },
              {
                "t": 146,
                "title": "What Do You Ask"
              },
              {
                "t": 411,
                "title": "Outro"
              }
            ]
          },
          {
            "v": "iIAbSOvf96E",
            "title": "How I Conduct A Requirements Gathering Interview",
            "channel": "Stefano",
            "seconds": 420,
            "note": "Requirements interviewing in practice.",
            "chapters": [
              {
                "t": 0,
                "title": "Goal of the Video"
              },
              {
                "t": 15,
                "title": "Real Life Scenario"
              },
              {
                "t": 50,
                "title": "1 Problem Definition"
              },
              {
                "t": 92,
                "title": "2 Requirements Gathering"
              },
              {
                "t": 342,
                "title": "3 Refinement and Prototyping"
              }
            ]
          },
          {
            "v": "2qlcY9LkFik",
            "title": "Software Planning and Technical Documentation",
            "channel": "AltexSoft",
            "seconds": 649,
            "note": "Turning discovery into a spec and documentation.",
            "chapters": [
              {
                "t": 0,
                "title": "What helps devs stay on course?"
              },
              {
                "t": 63,
                "title": "Software planning and technical documentation"
              },
              {
                "t": 180,
                "title": "What documents are used in software planning?"
              },
              {
                "t": 227,
                "title": "Product documentation"
              },
              {
                "t": 464,
                "title": "Process documentation"
              },
              {
                "t": 548,
                "title": "Why do we need documentation in agile?"
              }
            ]
          },
          {
            "v": "f210Aw8o1I4",
            "title": "5 Steps to Evaluate an AI Use Case",
            "channel": "Insight AI Labs",
            "seconds": 200,
            "note": "A quick filter for which AI use case is worth a pilot at all.",
            "chapters": []
          }
        ]
      },
      {
        "id": "p5-s1",
        "title": "Demo, pilot→production & proving ROI",
        "goal": "Win the room, survive Monday morning, and put a number on the renewal slide.",
        "concepts": [
          "Demo narrative",
          "Failure choreography",
          "Hardening & handoff",
          "ROI metrics & baselines",
          "Deflection / time saved",
          "Technical writing"
        ],
        "build": "Script a 10-minute demo for a skeptical buyer: the opening question, the wow beat, and the planned recovery when an answer is weak.",
        "res": [
          {
            "v": "Cxl_3ANnE0A",
            "title": "How to give a kick-ass demo",
            "channel": "Ignite Sydney",
            "seconds": 319,
            "note": "The classic demo talk — narrative and the wow beat.",
            "chapters": [
              {
                "t": 0,
                "title": "Intro"
              },
              {
                "t": 16,
                "title": "time for a demo..."
              },
              {
                "t": 143,
                "title": "they want software to reduce their pain"
              },
              {
                "t": 176,
                "title": "show how you can"
              }
            ]
          },
          {
            "v": "4X7WNKyVwVM",
            "title": "How To Do A Software Demo",
            "channel": "Matt Wolach",
            "seconds": 515,
            "note": "Practical demo structure and delivery.",
            "chapters": []
          },
          {
            "v": "ZIAzZtKWmbI",
            "title": "Demo to Production: Architect a Real Agentic AI System (Step by Step)",
            "channel": "Applied with AI",
            "seconds": 1380,
            "note": "The full arc from demo to production system.",
            "chapters": [
              {
                "t": 0,
                "title": "Intro"
              },
              {
                "t": 63,
                "title": "The Business Problem"
              },
              {
                "t": 164,
                "title": "The Starting Point"
              },
              {
                "t": 216,
                "title": "Connecting Agent to the Bank"
              },
              {
                "t": 311,
                "title": "One Agent. Too Many Tools"
              },
              {
                "t": 381,
                "title": "Who Plans Agent Execution?"
              },
              {
                "t": 448,
                "title": "Tool Integration Headache"
              },
              {
                "t": 493,
                "title": "MCP Servers"
              },
              {
                "t": 549,
                "title": "Demo - The Security Issue"
              },
              {
                "t": 608,
                "title": "Agent Knows Who is Talking"
              },
              {
                "t": 778,
                "title": "AI vs Software Engineering"
              },
              {
                "t": 820,
                "title": "The Memory"
              },
              {
                "t": 922,
                "title": "PII Never Leaves the Bank"
              },
              {
                "t": 1049,
                "title": "Prompt that breaks the system"
              },
              {
                "t": 1115,
                "title": "Where did my system go wrong"
              },
              {
                "t": 1239,
                "title": "The bill that tripled"
              },
              {
                "t": 1275,
                "title": "Edge Layer Security"
              }
            ]
          },
          {
            "v": "JvosMkuNxF8",
            "title": "Can you prove AI ROI in Software Eng? (Stanford / 120k devs)",
            "channel": "AI Engineer",
            "seconds": 1000,
            "note": "Evidence-based view of measuring AI impact — good for exec dashboards.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction & Methodology: ML Panels of Experts"
              },
              {
                "t": 21,
                "title": "The Research Approach: Time Series & Cross-Sectional Data"
              },
              {
                "t": 98,
                "title": "Four Key Topics Overview"
              },
              {
                "t": 121,
                "title": "Case Study: 10% Productivity Gain & The Widening Gap"
              },
              {
                "t": 196,
                "title": "Factors Driving Performance: Usage vs. Quality"
              },
              {
                "t": 242,
                "title": "The Environment Cleanliness Index"
              },
              {
                "t": 330,
                "title": "Managing Codebase Entropy & AI Trust"
              },
              {
                "t": 377,
                "title": "AI Engineering Practices Benchmark & Fingerprinting"
              },
              {
                "t": 458,
                "title": "Case Study: Unequal Adoption Across Business Units"
              },
              {
                "t": 511,
                "title": "Challenges in Measuring AI ROI via Business Outcomes"
              },
              {
                "t": 628,
                "title": "Proposed Measurement Framework: Usage & Outcomes"
              },
              {
                "t": 719,
                "title": "Metric Framework: Primary Output vs. Guardrails"
              },
              {
                "t": 774,
                "title": "Case Study: AI Adoption's Negative Impact on Quality"
              },
              {
                "t": 844,
                "title": "Rework, Refactoring, and Effective Output Analysis"
              },
              {
                "t": 943,
                "title": "Conclusion & Call for Research Participation"
              }
            ]
          },
          {
            "v": "vT5pcc30Ffw",
            "title": "Technical Writing Course for Beginners",
            "channel": "freeCodeCamp",
            "seconds": 4565,
            "note": "The underrated FDE skill: specs, docs, exec emails.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction"
              },
              {
                "t": 51,
                "title": "What is Technical Writing?"
              },
              {
                "t": 422,
                "title": "How to Frame a Definition?"
              },
              {
                "t": 678,
                "title": "Using 'Class' Categories to Frame Definitions"
              },
              {
                "t": 1357,
                "title": "How to Make Definitions More Concrete?"
              },
              {
                "t": 1666,
                "title": "Describing an Object"
              },
              {
                "t": 1904,
                "title": "Special Notices"
              },
              {
                "t": 2179,
                "title": "Writing User Instructions"
              },
              {
                "t": 2501,
                "title": "Describing a Process"
              },
              {
                "t": 2770,
                "title": "How to Write a Formal Report - Types of Reports"
              },
              {
                "t": 3320,
                "title": "How to Write a Formal Report - The Main Body"
              },
              {
                "t": 4039,
                "title": "How to Write a Formal Report - The Prefatory Part"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "p6",
    "n": "06",
    "tag": "Career & interview",
    "title": "Get hired",
    "blurb": "The interview is not a SWE loop — half of it is case/customer work. Wire this into the repo's own job-hunt files.",
    "sources": [
      "vibe P6",
      "repo: fde-job-hunt.md, todo.md, watchlist.md"
    ],
    "stations": [
      {
        "id": "p6-s0",
        "title": "The FDE interview loop",
        "goal": "Know what each round grades and drill it, not SWE trivia.",
        "concepts": [
          "Recruiter screen",
          "Technical/coding round",
          "System design",
          "Take-home",
          "Customer scenario round",
          "Company differences"
        ],
        "build": "Pick one target company and write the exact loop you expect; mark which round you're weakest on and schedule that drill this week.",
        "res": [
          {
            "v": "UxKAgyAZpjo",
            "title": "Crack Any FDE Interview With This Roadmap",
            "channel": "FDE Academy",
            "seconds": 1257,
            "note": "Every stage + a 6-week prep plan. Start here.",
            "chapters": []
          },
          {
            "v": "NYPP6kFuL8U",
            "title": "How to Pass the Palantir FDE Interview in 2026 (Insider Guide)",
            "channel": "The FDE Playbook",
            "seconds": 1076,
            "note": "Company-specific: Palantir.",
            "chapters": [
              {
                "t": 0,
                "title": "Introduction to FDE prep"
              },
              {
                "t": 156,
                "title": "Recruiting and platform role"
              },
              {
                "t": 218,
                "title": "Hiring manager intelligence"
              },
              {
                "t": 389,
                "title": "Candidate rejection feedback"
              },
              {
                "t": 438,
                "title": "Interview prep strategies"
              },
              {
                "t": 568,
                "title": "Advanced training techniques"
              },
              {
                "t": 771,
                "title": "Professional networking and skills"
              },
              {
                "t": 856,
                "title": "Consistent follow-up mindset"
              }
            ]
          },
          {
            "v": "VnIDWlOzb6s",
            "title": "I gave 15 FDE interviews. Here's what they ask.",
            "channel": "Anu Sharma",
            "seconds": 341,
            "note": "Hiring-side signal on what clears the bar.",
            "chapters": [
              {
                "t": 0,
                "title": "The evolving interview landscape"
              },
              {
                "t": 54,
                "title": "Key interview patterns"
              },
              {
                "t": 117,
                "title": "Technical and design shift"
              },
              {
                "t": 222,
                "title": "AI security and final advice"
              }
            ]
          },
          {
            "v": "I4sGn8Z1vpI",
            "title": "20 Agentic AI System Design Interview Questions & Solutions",
            "channel": "Keerti Purswani",
            "seconds": 1782,
            "note": "Drill the design round.",
            "chapters": [
              {
                "t": 0,
                "title": "Intro"
              },
              {
                "t": 3,
                "title": "Design a RAG system for over 10 Million Documents"
              },
              {
                "t": 115,
                "title": "RAG Chatbot Gives Fluent but Wrong Answers"
              },
              {
                "t": 185,
                "title": "Educosys AI System Design"
              },
              {
                "t": 231,
                "title": "AI Agent Keeps Calling the Wrong Tool"
              },
              {
                "t": 307,
                "title": "Why Can LLM Training Be Parallel"
              },
              {
                "t": 383,
                "title": "Standardize LLM Access for Multiple Teams"
              },
              {
                "t": 486,
                "title": "Can Smaller Models Improve AI Systems"
              },
              {
                "t": 577,
                "title": "Eval Scores Are High, but Users Still Complain"
              },
              {
                "t": 669,
                "title": "Measure LLM Latency in a Chat App"
              },
              {
                "t": 754,
                "title": "Scale RAG from 10K Documents to 100 Million"
              },
              {
                "t": 836,
                "title": "Design Memory for an Agentic App"
              },
              {
                "t": 935,
                "title": "Handle Prompt Injection in Retrieval"
              },
              {
                "t": 1035,
                "title": "Why Semantic Search Isn't Enough for Production RAG"
              },
              {
                "t": 1144,
                "title": "Recall Vs Precision in RAG"
              },
              {
                "t": 1255,
                "title": "Multi-Tenant Isolation in AI Systems"
              },
              {
                "t": 1364,
                "title": "Why Agentic RAG"
              },
              {
                "t": 1452,
                "title": "Design Agent that can recover from Failures"
              },
              {
                "t": 1530,
                "title": "Handle Conflicting Documents in RAG System"
              },
              {
                "t": 1594,
                "title": "AI Traffic Grows 100"
              },
              {
                "t": 1691,
                "title": "Prevent Agent Memory from Becoming Stale"
              }
            ]
          },
          {
            "v": "icd5KdbtwxM",
            "title": "What Do They Ask in an AI System Design Interview?",
            "channel": "Think in Models",
            "seconds": 3694,
            "note": "How to approach AI system design questions.",
            "chapters": []
          }
        ]
      },
      {
        "id": "p6-s1",
        "title": "Positioning, resume & applying",
        "goal": "Frame an experienced dev as an FDE and run the application loop.",
        "concepts": [
          "FDE positioning",
          "Resume/proof-of-work",
          "Applications per week",
          "Warm-first DMs",
          "Rejection as content"
        ],
        "build": "Apply to 5 FDE roles this week. Attach the coha artifact and one measured number. Then update fde-job-hunt.md's application table.",
        "res": [
          {
            "v": "7I_o_qOsqvU",
            "title": "How to Become an FDE in 2026: The Complete 90-Day Roadmap",
            "channel": "FDE Academy",
            "seconds": 691,
            "note": "Ties learning to the job hunt timeline.",
            "chapters": [
              {
                "t": 0,
                "title": "The state of the FDE role"
              },
              {
                "t": 31,
                "title": "The 90-day transition plan"
              },
              {
                "t": 93,
                "title": "Common traps to avoid"
              },
              {
                "t": 151,
                "title": "Phase 1: Build the AI core"
              },
              {
                "t": 259,
                "title": "Phase 2: Building proof"
              },
              {
                "t": 380,
                "title": "Phase 3: Visibility and hiring"
              },
              {
                "t": 526,
                "title": "Using AI tools effectively"
              },
              {
                "t": 555,
                "title": "FDE Academy overview"
              },
              {
                "t": 630,
                "title": "Final thoughts and summary"
              }
            ]
          },
          {
            "v": "yQ59ziskseY",
            "title": "How to Break Into FDE Without a Degree (Full Roadmap)",
            "channel": "FDE Academy",
            "seconds": 610,
            "note": "Positioning when you don't fit the standard mold.",
            "chapters": []
          },
          {
            "v": "j0m4Quq1lkI",
            "title": "FDE vs SWE: Which Career Has Better Growth in 2026?",
            "channel": "FDE Academy",
            "seconds": 1244,
            "note": "Frame the switch in interviews and applications.",
            "chapters": []
          },
          {
            "v": "4rhEsHg8kBk",
            "title": "I Left Google for an FDE Role — How Salary, Work & Life Changed",
            "channel": "Anu Sharma",
            "seconds": 780,
            "note": "What the move actually looks like.",
            "chapters": [
              {
                "t": 0,
                "title": "The internet had thoughts (intro)"
              },
              {
                "t": 45,
                "title": "What even is a Forward Deployed Engineer?"
              },
              {
                "t": 150,
                "title": "How my day-to-day work changed"
              },
              {
                "t": 330,
                "title": "The salary question (being honest)"
              },
              {
                "t": 450,
                "title": "What I miss & what I don't"
              },
              {
                "t": 570,
                "title": "Should YOU make this switch?"
              },
              {
                "t": 690,
                "title": "Summary + closing thoughts"
              }
            ]
          }
        ]
      }
    ]
  }
];

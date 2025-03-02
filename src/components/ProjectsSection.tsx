
import { FileText } from 'lucide-react';
import { Button } from './ui/button';

const ProjectsSection = () => {
  // Helper function to determine appropriate thumbnail based on project title
  const getThumbnailForProject = (title: string) => {
    // Default image as fallback
    let thumbnail = "/lovable-uploads/027c26db-20f8-40d6-ad41-dcc044d0e935.png";
    
    // Check for AI/ML projects
    if (title.includes("AI") || 
        title.includes("Chatbot") || 
        title.includes("DeepSeek") || 
        title.includes("ChatGPT") || 
        title.includes("Prompt Engineering")) {
      // AI thumbnail
      thumbnail = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80";
    }
    // Check for AWS Database projects
    else if (title.includes("Database") || 
             title.includes("Aurora") || 
             title.includes("DynamoDB") || 
             title.includes("Query Data")) {
      // Database thumbnail
      thumbnail = "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80";
    }
    // Check for AWS VPC/Networking
    else if (title.includes("VPC") || 
             title.includes("Network") || 
             title.includes("Subnet") || 
             title.includes("Connectivity") || 
             title.includes("Security")) {
      // Networking thumbnail
      thumbnail = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80";
    }
    // Check for AWS S3/Storage
    else if (title.includes("S3") || 
             title.includes("Storage") || 
             title.includes("Host") || 
             title.includes("Website")) {
      // Storage/hosting thumbnail
      thumbnail = "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80";
    }
    // Check for Kubernetes
    else if (title.includes("Kubernetes") || 
             title.includes("Container") || 
             title.includes("EKS") || 
             title.includes("Manifests")) {
      // Containers/kubernetes thumbnail
      thumbnail = "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800&q=80";
    }
    // Check for CI/CD, CodePipeline, DevOps
    else if (title.includes("CI/CD") || 
             title.includes("Code") || 
             title.includes("Pipeline") || 
             title.includes("Deploy") || 
             title.includes("Build")) {
      // DevOps thumbnail
      thumbnail = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80";
    }
    // Check for Lambda, serverless
    else if (title.includes("Lambda") || 
             title.includes("API Gateway") || 
             title.includes("Serverless")) {
      // Serverless thumbnail
      thumbnail = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80";
    }
    
    return thumbnail;
  };

  const projects = [
    {
      title: "Turn Your Data into an AI Chatbot",
      description: "Learn to create a conversational AI chatbot using your own data sources",
      tags: ["AI", "Chatbot", "Data Engineering"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "How to Use DeepSeek",
      description: "A comprehensive guide to leveraging DeepSeek AI capabilities",
      tags: ["AI", "DeepSeek", "Machine Learning"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Prompt Engineering For ChatGPT",
      description: "Master the art of crafting effective prompts for ChatGPT",
      tags: ["AI", "Prompt Engineering", "ChatGPT"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Build Your First AI Workflow",
      description: "Step-by-step guide to creating automated AI workflows",
      tags: ["AI", "Workflow", "Automation"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Getting Started with AWS Projects",
      description: "Introduction to building projects on AWS cloud platform",
      tags: ["AWS", "Cloud", "Beginner"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Host a Website on Amazon S3",
      description: "Learn to host static websites using Amazon S3 buckets",
      tags: ["AWS", "S3", "Web Hosting"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Visualize data with QuickSight",
      description: "Create powerful data visualizations using AWS QuickSight",
      tags: ["AWS", "QuickSight", "Data Visualization"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Cloud Security with AWS IAM",
      description: "Learn to manage access and security using AWS IAM",
      tags: ["AWS", "IAM", "Security"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Build a Chatbot with Amazon Lex",
      description: "Create conversational interfaces using Amazon Lex",
      tags: ["AWS", "Lex", "Chatbot"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Build a Chatbot with Custom Slots",
      description: "Enhance Lex chatbots with custom slot types",
      tags: ["AWS", "Lex", "Slots"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Connect a Chatbot with Lambda",
      description: "Integrate AWS Lambda functions with Lex chatbots",
      tags: ["AWS", "Lambda", "Lex"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Save User Info with your Chatbot",
      description: "Store and retrieve user data in chatbot interactions",
      tags: ["AWS", "Chatbot", "Database"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Build a Chatbot with Multiple Slots",
      description: "Create complex conversations with multiple slot types",
      tags: ["AWS", "Lex", "Advanced"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Visualize a Relational Database",
      description: "Create visual representations of relational database schemas",
      tags: ["AWS", "Database", "Visualization"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Aurora Database with EC2",
      description: "Set up and connect Aurora databases with EC2 instances",
      tags: ["AWS", "Aurora", "EC2"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Connect A Web App with Aurora",
      description: "Integrate Aurora databases with web applications",
      tags: ["AWS", "Aurora", "Web App"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Load Data into DynamoDB",
      description: "Import and manage data in Amazon DynamoDB",
      tags: ["AWS", "DynamoDB", "NoSQL"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Query Data with DynamoDB",
      description: "Learn efficient querying techniques for DynamoDB",
      tags: ["AWS", "DynamoDB", "Query"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Encrypt Data with AWS KMS",
      description: "Implement data encryption using AWS Key Management Service",
      tags: ["AWS", "KMS", "Security"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Build a Virtual Private Cloud",
      description: "Design and implement VPCs on AWS",
      tags: ["AWS", "VPC", "Networking"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "VPC Traffic Flow and Security",
      description: "Manage and secure network traffic in AWS VPCs",
      tags: ["AWS", "VPC", "Security"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Creating a Private Subnet",
      description: "Configure private subnets in AWS VPC environments",
      tags: ["AWS", "VPC", "Subnet"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Launching VPC Resources",
      description: "Deploy and manage resources within AWS VPCs",
      tags: ["AWS", "VPC", "Resources"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Testing VPC Connectivity",
      description: "Verify and troubleshoot connectivity in AWS VPCs",
      tags: ["AWS", "VPC", "Networking"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "VPC Peering",
      description: "Connect VPCs using AWS VPC peering connections",
      tags: ["AWS", "VPC", "Peering"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "VPC Monitoring with Flow Logs",
      description: "Track network traffic using VPC Flow Logs",
      tags: ["AWS", "VPC", "Monitoring"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Access S3 from a VPC",
      description: "Configure secure S3 access from within a VPC",
      tags: ["AWS", "VPC", "S3"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "VPC Endpoints",
      description: "Implement and use VPC endpoints for AWS services",
      tags: ["AWS", "VPC", "Endpoints"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Website Delivery with CloudFront",
      description: "Accelerate website delivery using CloudFront CDN",
      tags: ["AWS", "CloudFront", "CDN"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "APIs with Lambda + API Gateway",
      description: "Build serverless APIs using Lambda and API Gateway",
      tags: ["AWS", "Lambda", "API Gateway"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Fetch Data with AWS Lambda",
      description: "Retrieve and process data using serverless functions",
      tags: ["AWS", "Lambda", "Data Processing"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Build a Three-Tier Web App",
      description: "Implement a scalable three-tier architecture on AWS",
      tags: ["AWS", "Architecture", "Web App"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Threat Detection with GuardDuty",
      description: "Implement AWS GuardDuty for threat detection",
      tags: ["AWS", "Security", "GuardDuty"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Containers on Elastic Beanstalk",
      description: "Deploy containerized applications with Elastic Beanstalk",
      tags: ["AWS", "Containers", "Elastic Beanstalk"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Deploy an App Across Accounts",
      description: "Learn cross-account application deployment on AWS",
      tags: ["AWS", "Multi-Account", "Deployment"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Launch a Kubernetes Cluster",
      description: "Set up and configure Kubernetes clusters on AWS",
      tags: ["AWS", "Kubernetes", "EKS"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Set Up Kubernetes Deployment",
      description: "Configure and manage deployments in Kubernetes",
      tags: ["AWS", "Kubernetes", "Deployment"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Create Kubernetes Manifests",
      description: "Write and manage Kubernetes manifest files",
      tags: ["AWS", "Kubernetes", "Manifests"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Deploy Backend with Kubernetes",
      description: "Deploy backend services using Kubernetes",
      tags: ["AWS", "Kubernetes", "Backend"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Set Up a Web App in the Cloud",
      description: "Complete guide to deploying web applications on AWS",
      tags: ["AWS", "Web App", "Deployment"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Connect a GitHub Repo with AWS",
      description: "Integrate GitHub repositories with AWS services",
      tags: ["AWS", "GitHub", "CI/CD"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Dependencies and CodeArtifact",
      description: "Manage package dependencies with AWS CodeArtifact",
      tags: ["AWS", "CodeArtifact", "Dependencies"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Package an App with CodeBuild",
      description: "Build and package applications using AWS CodeBuild",
      tags: ["AWS", "CodeBuild", "CI/CD"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Deploy an App with CodeDeploy",
      description: "Automate deployments using AWS CodeDeploy",
      tags: ["AWS", "CodeDeploy", "CI/CD"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Automate with CloudFormation",
      description: "Create infrastructure as code using CloudFormation",
      tags: ["AWS", "CloudFormation", "IaC"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "CI/CD with CodePipeline",
      description: "Build CI/CD pipelines with AWS CodePipeline",
      tags: ["AWS", "CodePipeline", "CI/CD"],
      document: "/path-to-your-document.pdf",
    },
    {
      title: "Create S3 Buckets with Terraform",
      description: "Provision and manage S3 buckets using Terraform",
      tags: ["AWS", "Terraform", "S3"],
      document: "/path-to-your-document.pdf",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass p-6 rounded-lg hover:translate-y-[-4px] transition-transform"
            >
              <img
                src={getThumbnailForProject(project.title)}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.error("Failed to load image:", target.src);
                  // Fallback to local image if external image fails
                  target.src = "/lovable-uploads/027c26db-20f8-40d6-ad41-dcc044d0e935.png";
                }}
              />
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <FileText size={16} />
                  View Document
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

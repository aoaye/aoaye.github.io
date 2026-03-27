import { createElement } from "react"
import {
  SiApache,
  SiCss,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiKeras,
  SiMariadb,
  SiMui,
  SiNestjs,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiR,
  SiReact,
  SiScikitlearn,
  SiScipy,
  SiSqlite,
  SiStreamlit,
  SiTensorflow,
  SiTypescript,
  SiVite,
  SiYoutube,
} from "react-icons/si"
import { FiDownload, FiExternalLink } from "react-icons/fi"
import { FaCloud, FaDatabase, FaLink, FaLinkedin, FaMicrosoft, FaPencilRuler } from "react-icons/fa"

const techIconMap = {
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "C#": FaMicrosoft,
  PHP: SiPhp,
  R: SiR,
  SQL: FaDatabase,
  HTML: SiHtml5,
  CSS: SiCss,
  React: SiReact,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  Express: SiExpress,
  FastAPI: SiFastapi,
  Django: SiDjango,
  Flutter: SiFlutter,
  ".NET (WPF, ASP.NET)": SiDotnet,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  "Scikit-learn": SiScikitlearn,
  SQLAlchemy: FaDatabase,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  OpenCV: SiOpencv,
  SciPy: SiScipy,
  "Apache Spark": SiApache,
  Docker: SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
  "GitLab CI/CD": SiGitlab,
  "AWS (ECR, App Runner, EC2)": FaCloud,
  GCP: FaCloud,
  Railway: SiVite,
  "Jupyter Notebook": SiJupyter,
  "Google Colab": FaCloud,
  Streamlit: SiStreamlit,
  PostgreSQL: SiPostgresql,
  "SQL Server": FaDatabase,
  MariaDB: SiMariadb,
  Figma: SiFigma,
  "UI/UX Design": FaPencilRuler,
  "Design Systems": SiMui,
  Prototyping: FaLink,
}

const linkTypeIconMap = {
  github: SiGithub,
  website: FiExternalLink,
  streamlit: SiStreamlit,
  linkedin: FaLinkedin,
  youtube: SiYoutube,
  download: FiDownload,
}

export const linkTypeStyles = {
  github: "bg-black text-white hover:opacity-90",
  website: "bg-zinc-50 text-zinc-950 hover:brightness-95",
  streamlit: "bg-red-600 text-white hover:bg-red-700",
  linkedin: "bg-blue-600 text-white hover:bg-blue-700",
  youtube: "bg-red-600 text-white hover:bg-red-700",
  download: "bg-zinc-800 text-zinc-50 hover:bg-zinc-700",
}

export function getTechIcon(label) {
  return techIconMap[label] ?? FaLink
}

export function getLinkTypeIcon(type) {
  return linkTypeIconMap[type] ?? FiExternalLink
}

export function renderTechIcon(label, className) {
  const Icon = getTechIcon(label)
  return createElement(Icon, { className, "aria-hidden": true })
}

export function renderLinkTypeIcon(type, className) {
  const Icon = getLinkTypeIcon(type)
  return createElement(Icon, { className, "aria-hidden": true })
}

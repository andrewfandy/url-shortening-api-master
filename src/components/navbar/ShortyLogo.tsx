import { Link } from "react-router-dom";

export default function ShortlyLogo() {
  return (
    <Link to="/" className="flex items-center justify-center">
      <span className="text-3xl font-bold text-primary-dark-violet">
        Shortly
      </span>
    </Link>
  );
}

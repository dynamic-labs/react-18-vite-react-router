import { DynamicWidget } from "@dynamic-labs/sdk-react"
import { Link } from "react-router-dom";

export default function Root() {
    return (
        <div className="w-screen flex items-center justify-center h-screen">
            <h1>Root</h1>
            <DynamicWidget />
            <Link to={`page`}>Link</Link>
        </div>
    )
}
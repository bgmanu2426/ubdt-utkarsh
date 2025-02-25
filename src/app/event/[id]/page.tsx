import Link from "next/link"

const eventsData = [
    {
        id: "1",
        title: "Paper Presentation",
        description: "In-depth description of the paper presentation, its format, and criteria.",
        rules: "1. All submissions must be original. 2. Time limit is 10 minutes. 3. Q&A will follow the presentation.",
        registrationLink: "https://example.com/register/paper",
    },
    {
        id: "2",
        title: "Poster Presentation",
        description: "Detailed information regarding poster dimensions, presentation style, and judging criteria.",
        rules: "1. Poster must be A1 sized. 2. Content must be academic in nature. 3. All entries are subject to plagiarism checks.",
        registrationLink: "https://example.com/register/poster",
    },
    // add more events as needed…
]

export default function EventDetailPage({ params }: { params: { id: string } }) {
    const event = eventsData.find((e) => e.id === params.id)
    if (!event) {
        return <div className="p-8">Event not found.</div>
    }
    return (
        <div className="min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
            <p className="mb-4">{event.description}</p>
            <h2 className="text-2xl font-bold mb-2">Rules</h2>
            <p className="mb-4 whitespace-pre-line">{event.rules}</p>
            <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
            >
                Click here to Register
            </a>
            <div className="mt-8">
                <Link href="/">
                    Back to Home
                </Link>
            </div>
        </div>
    )
}

export default function Navbar() {
    return(
        <div className="flex justify-evenly items-center mt-7">
            <h1 className="text-4xl font-bold">Kynd</h1>

            <ul className="flex gap-8 text-xl font-semibold">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Benefits</a>
                </li>
                <li>
                    <a href="/charity" className="bg-blue-900 hover:bg-blue-800 px-5 py-2 rounded-lg">Start Donating</a>
                </li>
            </ul>
        </div>
    )
}
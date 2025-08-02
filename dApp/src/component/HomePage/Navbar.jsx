
export default function Navbar() {
    return(
        <div className="flex justify-evenly items-center mt-7">
            <h1 className="text-3xl font-bold">Kynd</h1>

            <ul className="flex gap-8 text-xl">
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
                    <a href="/Main">Connect your Wallet</a>
                </li>
            </ul>
        </div>
    )
}
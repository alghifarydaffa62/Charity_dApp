
export default function CharityCard({charity}) {
    return(
        <div className="p-5 bg-blue-950">
            <h1>Address: {charity.address}</h1>
            <h1>Title: {charity.title}</h1>
            <h1>Desc: {charity.desc}</h1>
            <h1>Target: {charity.target}</h1>
            <h1>Collected: {charity.collected}</h1>
        </div>
    )
}
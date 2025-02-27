export async function getVans(params) {
    const res = await fetch("api/vans")
    const data = await res.json()
    return data.vans
}
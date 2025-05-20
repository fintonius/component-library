export default function Badge({children, shape, color}) {
    return (
        <span className={`badge ${shape} ${color}`}>{children}</span>
    )
}
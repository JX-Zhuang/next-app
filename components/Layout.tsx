
export default function Layout({ children }:any) {
    return (
        <div>
            head
            <main>{children}</main>
            footer
        </div>
    )
}
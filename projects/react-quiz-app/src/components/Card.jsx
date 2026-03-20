export default function Card({ children }) {
    return <>
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
            {children}
        </div>
    </>
}
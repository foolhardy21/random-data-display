
const ProgressDisplay = ({ data }) => {
    const { title, current, target, unit } = data
    const progress = (current / target) * 100

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
            <div className="mb-2">
                <div className="text-2xl font-bold text-gray-800">{current.toLocaleString()} / {target.toLocaleString()} {unit}</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="text-sm text-gray-600">{progress.toFixed(1)}% complete</div>
        </div>
    )
}

export default ProgressDisplay
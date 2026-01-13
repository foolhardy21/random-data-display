
const MetricDisplay = ({ data }) => {
    const { value, label, change, trend } = data
    const trendColor = trend === 'up' ? 'text-green-500' : 'text-red-500'
    const trendIcon = trend === 'up' ? '↑' : '↓'

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-gray-800 mb-2">{value.toLocaleString()}</div>
            <div className="text-lg text-gray-600 mb-2">{label}</div>
            <div className={`text-sm font-medium ${trendColor}`}>
                {trendIcon} {change}
            </div>
        </div>
    )
}

export default MetricDisplay
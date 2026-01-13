const ListDisplay = ({ data }) => {
    const { title, items } = data

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800'
            case 'pending':
                return 'bg-yellow-100 text-yellow-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
            <ul className="space-y-3">
                {items?.map((item) => (
                    <li key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <div>
                            <div className="text-gray-800">{item.text}</div>
                            <div className="text-sm text-gray-500">{item.time}</div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                            {item.status}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListDisplay
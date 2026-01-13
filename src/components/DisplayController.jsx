import { MetricDisplay, ChartDisplay, ListDisplay, ProgressDisplay } from './displayTypes'

const DisplayController = ({ currentData = null, loading = false }) => {

    if (loading) return <></>
    switch (currentData?.type) {
        case 'metric':
            return <MetricDisplay data={currentData.data} />
        case 'chart':
            return <ChartDisplay data={currentData.data} />
        case 'list':
            return <ListDisplay data={currentData.data} />
        case 'progress':
            return <ProgressDisplay data={currentData.data} />
        default:
            return <></>
    }
}

export default DisplayController
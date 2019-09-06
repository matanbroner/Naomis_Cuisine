import React from 'react'
import localStyles from './styles.module.css'

import Title from '../../../components/Title'
import StatsBox from '../../../components/StatsBox'

import { Row, Col } from 'react-bootstrap'
import { faPencilAlt, faMapMarkedAlt, faUsers } from '@fortawesome/free-solid-svg-icons'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];


class AdminActivityPanel extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    renderStatsBoxes(){
        return(
            <Row>
                    <Col xs={12} lg={6} xl={4}>
                        <StatsBox
                        color='rgb(242, 171, 0)'
                        count={90}
                        title="Quotes Created"
                        context="1 week"
                        icon={faPencilAlt}
                        />
                    </Col>
                    <Col xs={12} lg={6} xl={4}>
                        <StatsBox
                        color='rgb(0, 188, 236)'
                        count={402}
                        title="Unqiue Users"
                        context="1 month"
                        icon={faUsers}
                        />
                    </Col>
                    <Col xs={12} lg={6} xl={4}>
                        <StatsBox
                        color='#9453b8'
                        count={6}
                        title="Average Pageviews"
                        context="1 year"
                        icon={faMapMarkedAlt}
                        />
                    </Col>
                </Row>
        )
    }

    renderGraphs(){
        return(
            <Row className={localStyles.graphRow}>
                <Col xs={12} md={4}>
                <ResponsiveContainer width='100%' height={300}>
                <LineChart title="Chart of PU x UV" data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
                </ResponsiveContainer>
                </Col>
                <Col xs={12} md={4}>
                <ResponsiveContainer width='100%' height={300}>
                <LineChart title="Chart of PU x UV" data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
                </ResponsiveContainer>
                </Col>
                <Col xs={12} md={4}>
                <ResponsiveContainer width='100%' height={300}>
                <LineChart title="Chart of PU x UV" data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
                </ResponsiveContainer>
                </Col>
            </Row>
        )
    }

    render(){
        return(
            <div id={localStyles.wrapper}>
                <Title
                main="Site Activity"
                sub="All things analytics"
                />
                { this.renderStatsBoxes() }
                { this.renderGraphs() }
                
            </div>
        )
    }
}

export default AdminActivityPanel
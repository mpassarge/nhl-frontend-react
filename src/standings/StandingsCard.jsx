import { Col, Table } from 'antd';


const columns = [
    {
        title: 'Team',
        dataIndex: 'name',
        key: 'name',
        colspan: 2,
    },
    {
        title: 'Points',
        dataIndex: 'points',
        key: 'points'
    },
    {
        title: 'Games Played',
        dataIndex: 'gamesPlayed',
        key: 'gamesPlayed'
    },
]

const titleStyle = {
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: '1.3rem',
}

const StandingsCard = ({ divisionName, teams, isCombined }) => {
    const colWidthLarge = isCombined ? 24 : 12;
    return <>
        <Col xs={24} lg={colWidthLarge}>
            <Table 
                dataSource={teams}
                columns={columns}
                bordered
                size="small"
                rowKey={row => row.id}
                title={() => <p style={titleStyle}>{divisionName.replace('-', ' ')}</p>}
                pagination={false}
            />
        </Col>
        <br/>
     </>
}
export default StandingsCard;
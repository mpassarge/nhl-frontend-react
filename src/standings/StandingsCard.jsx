import { useState } from "react";
import { Col, Table } from "antd";
import { PushpinTwoTone } from "@ant-design/icons";

const columns = [
    {
        title: "Team",
        dataIndex: "name",
        key: "name",
        colspan: 2,
    },
    {
        title: "Points",
        dataIndex: "points",
        key: "points",
    },
    {
        title: "Games Played",
        dataIndex: "gamesPlayed",
        key: "gamesPlayed",
    },
];

const titleStyle = {
    textTransform: "capitalize",
    textAlign: "center",
    fontSize: "1.3rem",
};

const Title = (props) => {    
    return (
        <>
            <p style={titleStyle}>{props.divisionName.replace("-", " ")}</p>
            <PushpinTwoTone onClick={props.pin} rotate={props.pinned ? -45 : 0} />
        </>
    );
};

const StandingsCard = ({ divisionName, teams }) => {

    const [pinned, setPinned] = useState(false);

    const pin = () => {
        setPinned(!pinned);
    }

    return (
        <>
            <Col xs={24} lg={12}>
                <Table
                    dataSource={teams}
                    columns={columns}
                    bordered
                    size="small"
                    rowKey={(row) => row.id}
                    title={() => <Title pinned={pinned} pin={pin} divisionName={divisionName}></Title>}
                    pagination={false}
                />
            </Col>
            <br />
        </>
    );
};
export default StandingsCard;

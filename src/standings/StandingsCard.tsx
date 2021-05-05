import { useState } from "react";
import { Col, Table } from "antd";
import { PushpinTwoTone } from "@ant-design/icons";
import { Team } from "./Models"
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
} as React.CSSProperties;

interface TitleProps {
    divisionName: string
}
const Title = (props: TitleProps) => {    
    const [pinned, setPinned] = useState(false);

    const clicked = () => {
        setPinned(!pinned);
    };

    return (
        <>
            <p style={titleStyle}>{props.divisionName.replace("-", " ")}</p>
            <PushpinTwoTone onClick={clicked} rotate={pinned ? -45 : 0} />
        </>
    );
};

interface StandingsCardProps {
    divisionName: string,
    teams: Team[],
    isCombined: boolean
}

const StandingsCard = ({ divisionName, teams, isCombined }: StandingsCardProps) => {
    const colWidthLarge = isCombined ? 24 : 12;
    return (
        <>
            <Col xs={24} lg={colWidthLarge}>
                <Table
                    dataSource={teams}
                    columns={columns}
                    bordered
                    size="small"
                    rowKey={(row) => row.id}
                    title={() => <Title divisionName={divisionName}></Title>}
                    pagination={false}
                />
            </Col>
            <br />
        </>
    );
};
export default StandingsCard;

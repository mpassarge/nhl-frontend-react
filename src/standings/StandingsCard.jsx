import { Col, Table } from "antd";
import { PushpinTwoTone } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { PIN_DIVISION } from "../reducers/types";

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
            <PushpinTwoTone
                onClick={props.pinDivision}
                rotate={props.pinned ? -45 : 0}
            />
        </>
    );
};

const StandingsCard = ({ division }) => {
    const dispatch = useDispatch();

    const pinDivision = () => {
        dispatch({type: PIN_DIVISION, payload: division.id});
    }

    return (
        <>
            <Col xs={24} lg={12}>
                <Table
                    dataSource={division.teams}
                    columns={columns}
                    bordered
                    size="small"
                    rowKey={(row) => row.id}
                    title={() => (
                        <Title
                            pinDivision={pinDivision}
                            pinned={division.pinned}
                            divisionName={division.divisionName}
                        ></Title>
                    )}
                    pagination={false}
                />
            </Col>
            <br />
        </>
    );
};
export default StandingsCard;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HouseDetailPage.scss";

const HouseDetailPage = () => {
    const { id } = useParams();
    const [house, setHouse] = useState(null);

    useEffect(() => {
        const fetchHouse = async () => {
            try {
                const response = await axios.get(`http://localhost:2000/houses/${id}`);
                setHouse(response.data);
            } catch (error) {
                console.error("Lỗi khi tải dữ liệu nhà:", error);
            }
        };

        fetchHouse();
    }, [id]);

    if (!house) {
        return <p>Đang tải dữ liệu...</p>;
    }

    return (
        <div>
            <h2>{house.house_name}</h2>
            <p>Địa chỉ: {house.address}</p>
            <p>Diện tích: {house.area ? `${house.area} m²` : "Chưa cập nhật"}</p>
            <p>Giá: {house.cost ? `${house.cost} VND` : "Chưa cập nhật"}</p>
            <img src={house.image} alt={house.house_name} style={{ width: "300px" }} />
    
            <h3>Tiện ích</h3>
            <ul>
                {house.utilities ? (
                    house.utilities.map((util, index) => <li key={index}>{util.name}</li>)
                ) : (
                    <p>Chưa có dữ liệu tiện ích</p>
                )}
            </ul>
    
            <h3>Bình luận</h3>
            <ul>
                {house.comments && house.comments.length > 0 ? (
                    house.comments.map((comment, index) => (
                        <li key={index}>
                            <strong>{comment.rater_id}</strong>: {comment.description} (⭐ {comment.rating})
                        </li>
                    ))
                ) : (
                    <p>Chưa có bình luận</p>
                )}
            </ul>
        </div>
    );    
};

export default HouseDetailPage;


import React, { useState } from "react";
import { Modal, Button } from "antd";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { StarOutlined } from "@ant-design/icons";
import { useHistory, useParams } from "react-router-dom";

const RatingModal = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [modalVisible, setModalVisible] = useState(false);

  let history = useHistory();
  let { slug } = useParams();

  // console.log("params", slug);

  const handleModal = () => {
    if (user && user.token) {
      setModalVisible(true);
    } else {
      history.push({
        pathname: "/login",
        // react-router-dom state (not react state)
        state: { from: `/product/${slug}` }, // params (access name from route router)
      });
    }
  };

  return (
    <>
      <div onClick={handleModal}>
        <StarOutlined className="text-danger" /> <br />{" "}
        {user ? "Produkt bewerten" : "Einloggen um zu bewerten"}
      </div>
      <Modal
        title="Bewerte dieses Produkt:"
        centered
        visible={modalVisible}
        onOk={() => {
          setModalVisible(false);
          toast.success("Vielen Dank für deine Bewertung!");
        }}
        onCancel={() => setModalVisible(false)}
      >
        {children}
      </Modal>
    </>
  );
};

export default RatingModal;

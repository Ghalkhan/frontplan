import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CheckBox } from "../component/atom/checkbox/CheckBox";
import styles from "../styles/Home.module.css";
import { MainBox } from "../component/atom/box/Box";
import styled from "styled-components";
import { FilterLine } from "../component/atom/filterLine/FilterLine";
import { Nav } from "../component/atom/nav/Nav";
import { useForm } from "react-hook-form";
import { Button } from "../component/atom/button/Button";

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const sendData = (data: any) => {
    console.log(data);
  };
  return (
    <Main>
      <Nav
        links={[
          { title: "جدیدترین پلان های مسکونی", href: "#" },
          { title: "جدیدترین پلان های ویلایی", href: "#" },
          { title: "پرفروش ترین پلان ها", href: "#" },
          { title: "پربازدیدترین پلان ها", href: "#" },
          { title: "پلان های رایگان", href: "#" },
        ]}
      ></Nav>
      <MainBox isRow title={"جستجوی پیشرفته پلان معماری"}>
        <form onSubmit={handleSubmit(sendData)}>
          <Side>
            <CheckBox
              register={register}
              name="type-plan"
              title="نوع کاربری:"
              checkboxs={["مسکونی", "ویلایی"]}
            />
            <CheckBox
              register={register}
              name="unit-type"
              title="نوع واحد:"
              checkboxs={["تک", "دوبلکس", "تری بلکس"]}
            />
            <CheckBox
              register={register}
              name="location"
              title="موقعیت زمین:"
              checkboxs={["شمالی", "جنوبی", "شرقی", "غربی"]}
            />
            <FilterLine
              register={register}
              name="floors"
              title="تعداد طبقات:"
              min="1"
              max="50"
            />
            <FilterLine
              register={register}
              name="units"
              title="تعداد واحد:"
              min="1"
              max="20"
            />
          </Side>

          <Side>
            <FilterLine
              register={register}
              name="area"
              title="مساحت زیربنا از ۲۰ تا ۵۰۰ متر"
              min="20"
              max="500"
            />
            <FilterLine
              register={register}
              name="width"
              title="عرض زیربنا از ۵ تا ۵۰ متر"
              min="5"
              max="50"
            />
            <FilterLine
              register={register}
              name="length"
              title="طول زیربنا از ۵ تا ۵۰ متر"
              min="5"
              max="50"
            />

            <FilterLine
              register={register}
              name="bathroom"
              title="تعداد حمام:"
              min="0"
              max="7"
            />

            <FilterLine
              register={register}
              name="bedroom"
              title="تعداد خواب:"
              min="0"
              max="7"
            />
          </Side>
          <Button title={"جستجو"} />
        </form>
      </MainBox>
    </Main>
  );
};

const Main = styled.div``;

const Side = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
`;
<button></button>;
export default Home;

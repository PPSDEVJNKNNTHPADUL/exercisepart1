import { Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const DynamicHeader = dynamic(() => import("../components/navapp"), {});
const DynamicFooter = dynamic(() => import("../components/footer"), {});
// import { useEffect } from "react";
// import { getCookie } from "cookies-next";
// import { useRouter } from "next/router";

export default function HomePage() {
  // const router = useRouter();
  // useEffect(() => {
  //   const checkCookie = setInterval(() => {
  //    const token = getCookie("userCredentials")
  //    if (!token) {
  //     router.replace("/login")}}, 1000)
  //    }
  // )
  return (
    <>
      <DynamicHeader />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="xl">
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Welcome to Home Page
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          consequat laoreet mi a cursus. Praesent interdum, nibh vitae
          pellentesque sollicitudin, risus nisi volutpat nibh, sed imperdiet est
          mauris ac odio. Nam accumsan volutpat accumsan. Nullam congue metus
          vel risus ultrices aliquet vitae sed arcu. Nulla facilisi. Phasellus
          maximus erat sed nisi sodales, scelerisque sodales neque iaculis. Sed
          libero magna, mollis ut arcu vel, blandit mollis purus. Ut tincidunt
          fermentum maximus. Aenean vitae metus tortor. Maecenas porttitor, nisl
          ut lobortis elementum, libero purus tincidunt turpis, eu blandit ex
          ipsum ut ipsum. Etiam at sapien quis turpis sodales aliquam nec nec
          dolor. Aenean quis lacus sed ipsum mollis consectetur. Aliquam dapibus
          enim in ornare venenatis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aenean aliquam eu massa non ultrices. Nam eget felis
          vestibulum, pharetra sem non, condimentum dolor. Vivamus vestibulum
          risus vitae magna scelerisque, eu venenatis mi fermentum. Aliquam
          varius justo at lorem pulvinar, vitae congue diam finibus. Nunc
          interdum feugiat erat ut ullamcorper. Nam laoreet neque sed massa
          elementum, gravida sollicitudin ante suscipit. Aenean ultrices rhoncus
          varius. Maecenas blandit justo leo, non faucibus eros vestibulum id.
          Praesent vehicula elit ac ante maximus commodo. Praesent eget erat
          tortor. Phasellus vitae justo quis mi tincidunt bibendum aliquet in
          mi. Ut varius rutrum tempus. Praesent elementum lectus eget congue
          vulputate. Pellentesque dignissim massa nec sapien mollis
          pellentesque. Aenean laoreet eget mauris ut cursus. Pellentesque
          varius felis lorem, at sagittis eros posuere nec. Phasellus id quam
          sapien. Nulla pellentesque volutpat scelerisque. Sed placerat
          dignissim nibh nec scelerisque. Vestibulum ac ligula pretium,
          sollicitudin ex eu, dapibus nulla. Donec non orci vel metus rhoncus
          ornare. Nam cursus sodales metus, sit amet laoreet nibh ullamcorper
          at. Sed at laoreet libero. Etiam venenatis, velit a interdum
          fringilla, dolor justo maximus metus, nec consequat turpis velit et
          libero. Nunc vel tortor molestie, hendrerit sapien sit amet, ultrices
          eros. Aenean ac lacinia nulla. Phasellus malesuada molestie ipsum, non
          eleifend lacus pellentesque quis. Integer vulputate enim ut mollis
          viverra. Proin fermentum porta nunc. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque ac ipsum et lacus sollicitudin
          dictum vitae ac massa. Sed nec consectetur tellus. Nulla et libero
          quis nulla laoreet tincidunt ut quis lacus. Suspendisse vehicula metus
          ut lectus finibus, et efficitur est tincidunt. Proin consequat nisi
          vel velit condimentum placerat. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Praesent magna
          quam, egestas ac ligula nec, placerat tempus lacus. Integer molestie,
          magna quis porttitor pulvinar, mi nulla sodales lorem, non tempus
          turpis ipsum at ipsum. Praesent in magna ac nunc porttitor egestas sit
          amet sit amet sem. Nunc tincidunt, ipsum quis blandit mattis, massa
          libero elementum massa, quis dictum elit libero sit amet mi. In eu ex
          purus. Duis scelerisque pharetra mauris sed condimentum. In massa
          orci, laoreet nec dignissim eget, ornare nec lectus. Sed suscipit leo
          in felis consequat faucibus. Nunc varius lectus in quam iaculis
          dignissim. Aliquam tellus nibh, semper a tempus nec, auctor in ex.
          Quisque imperdiet augue nibh, et viverra leo sodales vel.
        </Typography>
      </Container>
      <DynamicFooter />
    </>
  );
}

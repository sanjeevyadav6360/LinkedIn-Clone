// import styled from "styled-components";

// const PostModal =(props)=> {
//     return <Container><Content><Header>
//         <h2>Create a post</h2>
//         <button>
//             <img src ="/images/close-icon.svg" alt=""/>
//         </button>
//     </Header>
//     <SharedContent>
//         <UserInfo>
//             <img src="/images/user.svg" alt=""/>
//             <sapn>Name</sapn>
//         </UserInfo>
//     </SharedContent>
//     <ShareCreation><AttachAssets>
//         <AssetButton>
//         <img src="/images/share-image.svg" alt=""/>
//         </AssetButton>
//         <AssetButton>
//         <img src="/images/share-video.svg" alt=""/>
//         </AssetButton>
//     </AttachAssets></ShareCreation>
//     </Content></Container>;
// };
// const Container =styled.div`
// position:fixed;
// /* overflow:scroll; */
// top:0;
// left:0;
// right:0;
// bottom:0;
// z-index:9999;
// /* animation:fadeIn; */
// color : black;
// background-color:rgba(0,0,0,0.8);
// /* animation-duration:  0.5s; */
// `;

// const Content=styled.div `
// width:100%;
// max-width:552px;
// background-color:white;
// max-height: 90%;
// overflow:initial;
// border-radius:5px;
// position:relative;
// display:flex;
// flex-direction:column;
// top:32px;
// margin:0 auto;
// `;

// const Header= styled.div `
// display:block;
// padding:16px 20px;
// border-bottom:1px solid rgba(0,0,0,0.15);
// font-size:16px;
// line-height: 1.5;
// color: rgba(0,0,0,0.6);
// font-weight:100;
// display:flex;
// justify-content:space-between;
// align-items:center;
// button{
//     height: 40px;
//     width: 40px;
//     min-width:auto;
//     color: rgba(0,0,0,0.15);
//     svg{
//         pointer-events: none;
//     }
//     /* padding:6px ;
//     border-radius:50%;
//     background-color:white;
//     border:none;
//     transition-duration:170ms; */
//     /* :hover{
//         background-color:rgba(0,0,0,0.2)
//     } */
    
// }
// `;

// const SharedContent =styled.div`
// display: flex;
// flex-direction: column;
// flex-grow: 1;
// overflow-y: auto;
// vertical-align: baseline;
// background: transparent;
// padding: 8px 12px;
// `;

// const UserInfo= styled.div `
// display:flex;
// align-items:center;
// padding:12px 24px;
// svg,img{
// width:48;
// height:48px;
// background-clip: content-box;
// border: 2px solid transparent;
// border-radius:50%;
// }
// span{
// font-weight:600;
// font-size:16px;
// line-height: 1.5;
// margin-left: 5px;
// }
// `;

// const ShareCreation = styled.div `
// display:flex;
// flex-direction:column;
// justify-content:space-between;
// padding:12px 24px 12px 16px;
// `;

// const AssetButton =styled.button`
// `;

// const AttachAssets =styled.div`
// `;

// export default PostModal;







import styled from "styled-components";

const PostModal =(props)=> {
    return <Container>PostModal</Container>;
};
const Container=styled.div``;
export default PostModal;
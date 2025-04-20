// import React, { Component } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import Classiceditor from '@ckeditor/ckeditor5-build-classic';


// interface ClassicEditorState {
//     content: string;
// }

// export class ClassicEditor extends Component<{}, ClassicEditorState> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             content: ""
//         }
//     }
//     onCashange = (data: any) => {
//         console.log("Called");
//         this.setState({
//             content: data.getData()
//         })
//     }
//     render() {
//         Classiceditor.builtinPlugins.map(plugin => console.log(plugin.pluginName));

//         console.log("State", this.state.content);
//         return (
//             <>
//                 <div className='App'>
//                     <h2> Using CKEditor</h2>
//                     <CKEditor
//                         editor={Classiceditor}
//                         data="<p>Hello from CKEditor 5!</p>"
//                         onChange={(event, editor) => {
//                             this.onCashange(editor);

//                             // const data = editor.getData();
//                             // this.onChange( data );
//                             // //console.log( { event, editor, data } );
//                         }}
//                         onBlur={editor =>
//                             console.log("Blur", editor)}
//                         onFocus={editor => {
//                             //console.log( "Focus", editor )
//                         }}
//                     />
//                 </div>

//                 <div className='editor'>
//                     {this.state.content}
//                 </div>
//             </>
//         )
//     }
// }

// export default ClassicEditor
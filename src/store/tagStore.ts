// Skip to content
// Search or jump to…
//
// Pull requests
// Issues
// Marketplace
// Explore
//
// @AngelaFangguyue
// FrankFang
// /
// morney-live-store-1
// 1
// 00
// Code
// Issues 0
// Pull requests 2 Actions
// Projects 0
// Wiki
// Security 0
// Insights
// morney-live-store-1/src/store/tagStore.ts /
// @FrankFang FrankFang 模块化的 store，删除了 models。
// 415d0f6 on 11 Feb
// 61 lines (57 sloc)  1.54 KB
//
// import createId from '@/lib/createId';
//
// const localStorageKeyName = 'tagList';
//
// const tagStore = {
//   tagList: [] as Tag[],
//   fetchTags() {
//     this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
//     return this.tagList;
//   },
//   findTag(id: string) {
//     return this.tagList.filter(t => t.id === id)[0];
//   },
//   createTag(name: string) {
//     const names = this.tagList.map(item => item.name);
//     if (names.indexOf(name) >= 0) {
//       window.alert('标签名重复了');
//       return 'duplicated';
//     }
//     const id = createId().toString();
//     this.tagList.push({id, name: name});
//     this.saveTags();
//     window.alert('添加成功');
//     return 'success';
//   },
//   removeTag(id: string) {
//     let index = -1;
//     for (let i = 0; i < this.tagList.length; i++) {
//       if (this.tagList[i].id === id) {
//         index = i;
//         break;
//       }
//     }
//     this.tagList.splice(index, 1);
//     this.saveTags();
//     return true;
//   },
//   updateTag(id: string, name: string) {
//     const idList = this.tagList.map(item => item.id);
//     if (idList.indexOf(id) >= 0) {
//       const names = this.tagList.map(item => item.name);
//       if (names.indexOf(name) >= 0) {
//         return 'duplicated';
//       } else {
//         const tag = this.tagList.filter(item => item.id === id)[0];
//         tag.name = name;
//         this.saveTags();
//         return 'success';
//       }
//     } else {
//       return 'not found';
//     }
//   },
//   saveTags() {
//     window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
//   }
// };
//
// tagStore.fetchTags();
//
// export default tagStore;
// © 2020 GitHub, Inc.
//   Terms
// Privacy
// Security
// Status
// Help
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About

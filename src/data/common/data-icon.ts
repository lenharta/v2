import { Avatar } from "@/types";

export const DATA_ICON_AVATAR_FILLED = {
  dog: `M10.876 8.661c.387.216.848.339 1.37.339.847 0 1.555-.307 2.047-.844.481-.526.703-1.216.703-1.906a.75.75 0 0 0-1.5 0c0 .377-.12.686-.31.894-.18.196-.472.356-.94.356-.449 0-.73-.162-.914-.37A1.46 1.46 0 0 1 11 6.29V4.25A2.25 2.25 0 0 1 13.25 2h3.185c.509 0 1.007.141 1.44.408l2.768 1.703A.75.75 0 0 1 21 4.75v1.5a2.25 2.25 0 0 1-2.25 2.25h-.25v9.533c.92.088 1.618.366 2.047.964.257.359.36.76.408 1.129.045.352.045.736.045 1.09v.034a.75.75 0 0 1-.75.75h-3.252v-.774c0-.572.002-2.208-1.5-3.169v-2.804a.75.75 0 0 0-1.5 0v2.266a4.622 4.622 0 0 0-.697-.022c-.026 0-.049.002-.064.003h-.025l-.003.001a.75.75 0 1 0 .082 1.498h.003l.013-.001.05-.002c.041-.002.093-.003.141-.003.432 0 .715.073.901.17l.033.017c1.039.484 1.066 1.439 1.066 2.07V22H5.833a3.833 3.833 0 0 1-1.97-7.123.75.75 0 0 1 .772 1.287A2.333 2.333 0 0 0 5.833 20.5c.319 0 .517-.083.649-.176.139-.098.248-.238.331-.407a1.928 1.928 0 0 0 .187-.69v-.035l.004-.143a14.198 14.198 0 0 1 .26-2.187c.26-1.291.797-2.968 1.952-4.139.848-.86 1.309-2.119 1.547-3.364.046-.238.083-.472.113-.698Z`,
  music: `M20 2.75a.75.75 0 0 0-.965-.718l-10 3a.75.75 0 0 0-.535.718v9.877a3.5 3.5 0 1 0 1.496 2.702.756.756 0 0 0 .004-.079v-7.942l8.5-2.55v5.87a3.5 3.5 0 1 0 1.496 2.702.764.764 0 0 0 .004-.08V2.75Z`,
  robot: `M17.753 14a2.25 2.25 0 0 1 2.25 2.25v.905a3.75 3.75 0 0 1-1.307 2.846C17.13 21.345 14.89 22 12 22c-2.89 0-5.128-.656-6.691-2a3.75 3.75 0 0 1-1.306-2.843v-.908A2.25 2.25 0 0 1 6.253 14h11.5ZM11.898 2.008 12 2a.75.75 0 0 1 .743.648l.007.102V3.5h3.5a2.25 2.25 0 0 1 2.25 2.25v4.505a2.25 2.25 0 0 1-2.25 2.25h-8.5a2.25 2.25 0 0 1-2.25-2.25V5.75A2.25 2.25 0 0 1 7.75 3.5h3.5v-.749a.75.75 0 0 1 .648-.743L12 2l-.102.007ZM9.75 6.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4.493 0a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499Z`,
  pizza: `M9 10.99a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 1.998a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 3.998a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 4.66c0-1.497 1.23-2.805 2.82-2.648A20.782 20.782 0 0 1 21.262 8.84c1.07 1.193.737 2.964-.479 3.845-1.582 1.148-3.94 2.857-5.283 3.833-.002.437-.002.721-.001 1.092v.628a1.75 1.75 0 0 1-2.056 1.724c-.204.826-.932 1.527-1.944 1.527-.7 0-1.262-.335-1.609-.815l-1.325.957c-1.488 1.074-3.57.011-3.569-1.826L5 4.661Zm2.673-1.155c-.609-.06-1.174.443-1.174 1.155v.52c5.254.221 9.911 2.749 12.985 6.594l.419-.304c.578-.42.652-1.173.242-1.63A19.282 19.282 0 0 0 7.673 3.506Zm-1.177 16.3c0 .612.694.967 1.19.608l2.128-1.534a.75.75 0 0 1 1.188.61c0 .27.209.5.497.5a.497.497 0 0 0 .502-.5v-1.252a.75.75 0 0 1 1.5 0c0 .14.111.25.248.25a.25.25 0 0 0 .25-.25v-.622c-.001-.47-.002-.808.005-1.489a.75.75 0 0 1 .308-.6c.902-.656 2.496-1.812 3.956-2.87a16.04 16.04 0 0 0-11.77-5.974l-.002 13.123Z`,
  football: `M21.379 11.5a14.782 14.782 0 0 1-9.973 9.906l-8.812-8.812A14.782 14.782 0 0 1 12.5 2.62L21.38 11.5Zm-7.66-2.28-4.5 4.5a.75.75 0 1 0 1.061 1.06l4.5-4.5a.75.75 0 1 0-1.06-1.06ZM2.2 14.32l7.48 7.48c-.79.132-1.602.2-2.43.2h-1A4.25 4.25 0 0 1 2 17.75v-1c0-.828.068-1.64.2-2.43ZM14.217 2.217l7.566 7.566c.143-.823.217-1.67.217-2.533v-1A4.25 4.25 0 0 0 17.75 2h-1c-.864 0-1.71.074-2.533.217Z`,
  baseball: `M3.94 6.079A9.955 9.955 0 0 0 2 12c0 2.209.716 4.25 1.929 5.905.071-.068.147-.139.227-.21.645-.578 1.608-1.268 2.857-1.684a.75.75 0 1 1 .474 1.423c-1 .333-1.788.893-2.33 1.378a7.28 7.28 0 0 0-.251.236A9.97 9.97 0 0 0 12 22a9.969 9.969 0 0 0 7.094-2.952 7.234 7.234 0 0 0-.25-.236c-.543-.485-1.33-1.045-2.331-1.378a.75.75 0 1 1 .474-1.423c1.25.416 2.212 1.106 2.857 1.684.08.072.156.142.227.21A9.955 9.955 0 0 0 22 12c0-2.216-.72-4.264-1.94-5.921l-.216.199c-.646.577-1.608 1.267-2.857 1.684a.75.75 0 0 1-.474-1.423c1-.334 1.788-.894 2.33-1.38.086-.076.165-.15.237-.22A9.969 9.969 0 0 0 12 2a9.969 9.969 0 0 0-7.08 2.938c.072.071.15.145.236.222.543.485 1.33 1.045 2.331 1.378a.75.75 0 1 1-.474 1.424C5.763 7.545 4.8 6.855 4.156 6.278a8.802 8.802 0 0 1-.215-.2Zm5.083 10.075a.758.758 0 0 1 .547-.91h.003l.007-.002.024-.006.08-.018a11.104 11.104 0 0 1 1.32-.181 12.54 12.54 0 0 1 3.393.2.75.75 0 0 1-.294 1.47 11.037 11.037 0 0 0-2.983-.175 9.664 9.664 0 0 0-1.123.153 5.137 5.137 0 0 0-.065.015s-.748.099-.91-.546Zm.909-8.882.065.015c.05.01.13.026.232.044.206.036.511.08.891.109a11.04 11.04 0 0 0 2.983-.175.75.75 0 0 1 .294 1.47 12.54 12.54 0 0 1-3.392.2 11.143 11.143 0 0 1-1.32-.181 4.687 4.687 0 0 1-.081-.018l-.024-.005-.007-.002H9.57a.758.758 0 0 1-.547-.91c.16-.646.909-.547.909-.547Z`,
  basketball: `M18.433 12.866c-1.285-.383-2.765-.897-4.16-2.077L13.062 12l6.52 6.521a9.94 9.94 0 0 0 2.153-4.225l-.007-.007a.335.335 0 0 1-.008-.009c-.34-.34-.779-.587-1.339-.804-.436-.168-.901-.304-1.426-.456l-.522-.154ZM18.522 4.418l-4.245 4.246c-.92-1.126-1.35-2.332-1.706-3.526l-.137-.468a19.75 19.75 0 0 0-.512-1.593 6.389 6.389 0 0 0-.515-1.06 9.976 9.976 0 0 1 7.115 2.401ZM19.583 5.479l-4.245 4.245c1.124.92 2.33 1.349 3.524 1.705l.468.137a19.79 19.79 0 0 1 1.593.511c.363.141.721.307 1.06.517a9.976 9.976 0 0 0-2.4-7.115ZM9.72 2.28l-.015-.014A9.94 9.94 0 0 0 5.48 4.418l6.522 6.522 1.21-1.211c-1.18-1.396-1.694-2.876-2.077-4.162l-.154-.522a17.56 17.56 0 0 0-.456-1.426c-.217-.56-.464-.999-.804-1.339ZM2.131 10.388A9.946 9.946 0 0 1 4.42 5.479L10.94 12 9.852 13.09c-1.475-1.193-3.192-1.616-4.663-1.911-.207-.042-.407-.08-.6-.118-.608-.118-1.149-.223-1.645-.367a4.859 4.859 0 0 1-.813-.305ZM2.001 11.962a9.968 9.968 0 0 0 2.418 6.56l4.365-4.365c-1.142-.873-2.498-1.229-3.89-1.509-.178-.036-.36-.07-.542-.106-.623-.12-1.258-.243-1.826-.408a7.577 7.577 0 0 1-.525-.172ZM9.847 15.214 5.48 19.582a9.971 9.971 0 0 0 6.757 2.415 6.15 6.15 0 0 1-.367-.931c-.166-.534-.29-1.125-.41-1.7-.036-.169-.07-.335-.106-.498-.277-1.274-.629-2.533-1.507-3.654ZM13.895 21.82a9.945 9.945 0 0 0 4.627-2.238l-6.521-6.521-1.087 1.087c1.183 1.439 1.608 3.032 1.906 4.401l.119.559c.117.559.22 1.053.363 1.512.157.504.342.896.593 1.2Z`,
  star: `M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777Z`,
  heart: `m12.82 5.58-.82.822-.824-.824a5.375 5.375 0 1 0-7.601 7.602l7.895 7.895a.75.75 0 0 0 1.06 0l7.902-7.897a5.376 5.376 0 0 0-.001-7.599 5.38 5.38 0 0 0-7.611 0Z`,
  code: `m8.086 18.611 5.996-14.004a1 1 0 0 1 1.878.677l-.04.11-5.996 14.004a1 1 0 0 1-1.878-.677l.04-.11 5.996-14.004L8.086 18.61Zm-5.793-7.318 4-4a1 1 0 0 1 1.497 1.32l-.083.094L4.414 12l3.293 3.293a1 1 0 0 1-1.32 1.498l-.094-.084-4-4a1 1 0 0 1-.083-1.32l.083-.094 4-4-4 4Zm14-4.001a1 1 0 0 1 1.32-.083l.093.083 4.001 4.001a1 1 0 0 1 .083 1.32l-.083.095-4.001 3.995a1 1 0 0 1-1.497-1.32l.084-.095L19.584 12l-3.293-3.294a1 1 0 0 1 0-1.414Z`,
  palette: `M3.839 5.858c2.94-3.916 9.03-5.055 13.364-2.36 4.28 2.66 5.854 7.777 4.1 12.577-1.655 4.533-6.016 6.328-9.159 4.048-1.177-.854-1.634-1.925-1.854-3.664l-.106-.987-.045-.398c-.123-.934-.311-1.352-.705-1.572-.535-.298-.892-.305-1.595-.033l-.351.146-.179.078c-1.014.44-1.688.595-2.541.416l-.2-.047-.164-.047c-2.789-.864-3.202-4.647-.565-8.157Zm12.928 4.722a1.25 1.25 0 1 0 2.415-.647 1.25 1.25 0 0 0-2.415.647Zm.495 3.488a1.25 1.25 0 1 0 2.414-.647 1.25 1.25 0 0 0-2.414.647Zm-2.474-6.491a1.25 1.25 0 1 0 2.415-.647 1.25 1.25 0 0 0-2.415.647Zm-.028 8.998a1.25 1.25 0 1 0 2.415-.647 1.25 1.25 0 0 0-2.415.647Zm-3.497-9.97a1.25 1.25 0 1 0 2.415-.646 1.25 1.25 0 0 0-2.415.646Z`,
  coffee: `M3.941 5C2.87 5 2 5.87 2 6.941V12a8 8 0 0 0 15.911 1.197h.738a3.349 3.349 0 0 0 0-6.697h-.7c-.2-.86-.97-1.5-1.89-1.5H3.94ZM18 8h.649a1.849 1.849 0 1 1 0 3.697H18V8Z`,
  beer: `M7.25 2A3.25 3.25 0 0 0 4 5.25v14.5A2.25 2.25 0 0 0 6.25 22h9a2.25 2.25 0 0 0 2.25-2.25V18h1.25A3.25 3.25 0 0 0 22 14.75v-5.5A3.25 3.25 0 0 0 18.75 6H17.5v-.75A3.25 3.25 0 0 0 14.25 2h-7Zm11.5 14.5H17.5v-9h1.25c.966 0 1.75.784 1.75 1.75v5.5a1.75 1.75 0 0 1-1.75 1.75ZM16 6H5.5v-.75c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75V6Zm-7.5 4v7A.75.75 0 0 1 7 17v-7a.75.75 0 0 1 1.5 0Zm3 0v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 1.5 0Zm3 0v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 1.5 0Z`,
  smiley: `M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999ZM8.462 14.784a.75.75 0 1 0-1.178.928A5.991 5.991 0 0 0 12 18.002c1.86 0 3.581-.852 4.712-2.284a.75.75 0 0 0-1.177-.93A4.492 4.492 0 0 1 12 16.502c-1.398 0-2.69-.64-3.538-1.718ZM9 8.75a1.25 1.25 0 1 0 0 2.499A1.25 1.25 0 0 0 9 8.75Zm6 0a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499Z`,
  bolt: `m8.294 14-1.767 7.068c-.187.746.736 1.256 1.269.701L19.79 9.27A.75.75 0 0 0 19.25 8h-4.46l1.672-5.013A.75.75 0 0 0 15.75 2h-7a.75.75 0 0 0-.721.544l-3 10.5A.75.75 0 0 0 5.75 14h2.544Z`,
  film: `m19.729 3.875.05.16.552 1.922a.75.75 0 0 1-.418.893l-.096.035L9.09 9.96h11.159a.75.75 0 0 1 .743.65l.007.1v8.499a2.75 2.75 0 0 1-2.583 2.745l-.167.005H5.75a2.75 2.75 0 0 1-2.745-2.582L3 19.209v-8.392l-.522-1.821a2.75 2.75 0 0 1 1.726-3.35l.16-.052L16.378 2.15a2.75 2.75 0 0 1 3.35 1.726ZM6.273 6.607l-1.496.43a1.25 1.25 0 0 0-.886 1.42l.029.125.344 1.201.295-.085 1.714-3.09Zm4.756-1.363-2.717.779-1.714 3.09 2.718-.778 1.713-3.091Zm4.757-1.365-2.717.78-1.714 3.09 2.717-.778 1.714-3.092Zm1.848-.233-1.521 2.74 2.568-.737-.343-1.2a1.248 1.248 0 0 0-.704-.803Z`,
  puzzle: `M13 2a2.47 2.47 0 0 1 2.47 2.47l-.001.53H19a1 1 0 0 1 1 1l-.001 3.499-1.53.001a2.47 2.47 0 0 0-2.464 2.307L16 11.97v.06a2.47 2.47 0 0 0 2.307 2.465l.163.005 1.529-.001.001 3.504a1 1 0 0 1-1 1l-3.531-.001v.528a2.47 2.47 0 1 1-4.939 0v-.528H7a1 1 0 0 1-1-1l-.001-3.531h-.53a2.47 2.47 0 0 1 0-4.94H6L6 6a1 1 0 0 1 1-1h3.53v-.53A2.47 2.47 0 0 1 13 2Z`,
  shield: `M3 5.75A.75.75 0 0 1 3.75 5c2.663 0 5.258-.943 7.8-2.85a.75.75 0 0 1 .9 0C14.992 4.057 17.587 5 20.25 5a.75.75 0 0 1 .75.75V11c0 5.001-2.958 8.676-8.725 10.948a.75.75 0 0 1-.55 0C5.958 19.676 3 16 3 11V5.75Z`,
  soccer: `M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM8.244 4.373l3.008 1.8v2.193l-2.791 2.028-2.044-.707-.587-3.534a8.526 8.526 0 0 1 2.414-1.78Zm-4.623 9.066 2.327-2.327 2.04.705L9.07 15.15l-.97 1.575-3.293-.194a8.448 8.448 0 0 1-1.186-3.092Zm6.909 6.934-1.184-2.809.963-1.567h3.372l.912 1.581-1.04 2.78a8.554 8.554 0 0 1-3.023.015Zm8.362-3.397-3.024-.19-.938-1.624 1.087-3.345 2.013-.696 2.312 2.52a8.459 8.459 0 0 1-1.45 3.335Zm-.72-10.82-.589 3.533-2.04.705-2.791-2.028V6.172l3.002-1.8a8.528 8.528 0 0 1 2.418 1.784Z`,
  person: `M17.754 14a2.249 2.249 0 0 1 2.25 2.249v.918a2.75 2.75 0 0 1-.513 1.599C17.945 20.929 15.42 22 12 22c-3.422 0-5.945-1.072-7.487-3.237a2.75 2.75 0 0 1-.51-1.595v-.92a2.249 2.249 0 0 1 2.249-2.25h11.501ZM12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z`,
  trophy: `M15.253 2a2.25 2.25 0 0 1 2.236 2h1.268A1.75 1.75 0 0 1 20.5 5.606l.006.144v3a3.25 3.25 0 0 1-3.066 3.245l-.21.006a5.758 5.758 0 0 1-4.731 3.95V17.5h1.753a3.25 3.25 0 0 1 3.244 3.066l.006.184v.5a.75.75 0 0 1-.649.743l-.101.007H6.75a.75.75 0 0 1-.744-.648L6 21.25v-.5a3.25 3.25 0 0 1 3.065-3.245l.185-.005H11v-1.549a5.758 5.758 0 0 1-4.729-3.95L6.245 12a3.25 3.25 0 0 1-3.25-3.25v-3c0-.966.784-1.75 1.75-1.75h1.268A2.25 2.25 0 0 1 8.25 2h7.003Zm3.504 3.5h-1.254v4.983A1.75 1.75 0 0 0 19 8.904l.007-.154v-3a.25.25 0 0 0-.193-.243l-.057-.007ZM6 5.5H4.745a.25.25 0 0 0-.25.25v3A1.75 1.75 0 0 0 6 10.483V5.5Z`,
};

export const DATA_ICON_AVATAR_OUTLINED = {
  dog: `M13.25 2h3.185c.509 0 1.007.141 1.44.408l2.768 1.703A.75.75 0 0 1 21 4.75v1.5a2.25 2.25 0 0 1-2.25 2.25h-.25v9.047c.997.134 1.695.555 2.095 1.275.223.403.318.84.362 1.243.043.391.043.8.043 1.16v.025a.75.75 0 0 1-.75.75H5.833a3.833 3.833 0 0 1-1.97-7.123.75.75 0 0 1 .772 1.287A2.333 2.333 0 0 0 5.833 20.5c.319 0 .517-.083.649-.176.139-.098.248-.238.331-.407a1.928 1.928 0 0 0 .187-.69v-.035l.004-.143a14.198 14.198 0 0 1 .26-2.187c.26-1.291.797-2.968 1.952-4.139.848-.86 1.309-2.119 1.547-3.364C11 8.13 11 7.008 11 6.5V4.25A2.25 2.25 0 0 1 13.25 2Zm-5.5 17.25.75.026v.006l-.001.01-.002.028a3.42 3.42 0 0 1-.05.38c-.039.213-.112.5-.25.8h7.25c-.09-.494-.34-1.006-1.013-1.32a1.74 1.74 0 0 0-.482-.132 4.694 4.694 0 0 0-.702-.055l-.283.004-.141.002h-.06a.75.75 0 1 1-.028-1.499l.062-.001.143-.002.307-.004c.235 0 .495.016.75.047v-2.287a.75.75 0 0 1 1.5 0v2.804c1.065.682 1.374 1.703 1.463 2.443h2.524a4.9 4.9 0 0 0-.021-.27c-.033-.301-.094-.52-.183-.68-.13-.234-.433-.55-1.533-.55a.75.75 0 0 1-.75-.75V7.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 0 .75-.75V5.17l-2.411-1.485a1.247 1.247 0 0 0-.654-.185h-3.186a.75.75 0 0 0-.749.75v2.232a.922.922 0 0 0 .205.554c.101.114.26.214.545.214.287 0 .453-.101.556-.219A.882.882 0 0 0 14 6.45a.75.75 0 0 1 1.5 0c0 .554-.177 1.125-.566 1.569-.4.457-.984.731-1.684.731-.312 0-.599-.054-.855-.154a13.93 13.93 0 0 1-.158 1.045c-.262 1.366-.801 2.968-1.953 4.136-.845.856-1.308 2.18-1.549 3.38a12.702 12.702 0 0 0-.235 2.06v.059l-.75-.026Z`,
  music: `M19.698 2.148A.75.75 0 0 1 20 2.75v13.5a.764.764 0 0 1-.004.079 3.5 3.5 0 1 1-1.496-2.702V7.758l-8.5 2.55v7.942a.756.756 0 0 1-.004.079A3.5 3.5 0 1 1 8.5 15.627V5.75a.75.75 0 0 1 .534-.718l10-3a.75.75 0 0 1 .664.116ZM10 8.742l8.5-2.55V3.758L10 6.308v2.434ZM6.5 16.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z`,
  robot: `M17.753 14a2.25 2.25 0 0 1 2.25 2.25v.905a3.75 3.75 0 0 1-1.307 2.846C17.13 21.345 14.89 22 12 22c-2.89 0-5.128-.656-6.691-2a3.75 3.75 0 0 1-1.306-2.843v-.908A2.25 2.25 0 0 1 6.253 14h11.5Zm0 1.5h-11.5a.75.75 0 0 0-.75.75v.908c0 .655.286 1.278.784 1.706C7.545 19.945 9.44 20.502 12 20.502c2.56 0 4.458-.557 5.719-1.64a2.25 2.25 0 0 0 .784-1.706v-.906a.75.75 0 0 0-.75-.75ZM11.898 2.008 12 2a.75.75 0 0 1 .743.648l.007.102V3.5h3.5a2.25 2.25 0 0 1 2.25 2.25v4.505a2.25 2.25 0 0 1-2.25 2.25h-8.5a2.25 2.25 0 0 1-2.25-2.25V5.75A2.25 2.25 0 0 1 7.75 3.5h3.5v-.749a.75.75 0 0 1 .648-.743L12 2l-.102.007ZM16.25 5h-8.5a.75.75 0 0 0-.75.75v4.505c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75V5.75a.75.75 0 0 0-.75-.75Zm-6.5 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.492 0a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499Z`,
  pizza: `M9 10.99a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 1.998a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 3.998a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 4.66c0-1.497 1.23-2.805 2.82-2.648A20.782 20.782 0 0 1 21.262 8.84c1.07 1.193.737 2.964-.479 3.845-1.582 1.148-3.94 2.857-5.283 3.833-.002.437-.002.721-.001 1.092v.628a1.75 1.75 0 0 1-2.056 1.724c-.204.826-.932 1.527-1.944 1.527-.7 0-1.262-.335-1.609-.815l-1.325.957c-1.488 1.074-3.57.011-3.569-1.826L5 4.661Zm2.673-1.155c-.609-.06-1.174.443-1.174 1.155v.52c5.254.221 9.911 2.749 12.985 6.594l.419-.304c.578-.42.652-1.173.242-1.63A19.282 19.282 0 0 0 7.673 3.506Zm-1.177 16.3c0 .612.694.967 1.19.608l2.128-1.534a.75.75 0 0 1 1.188.61c0 .27.209.5.497.5a.497.497 0 0 0 .502-.5v-1.252a.75.75 0 0 1 1.5 0c0 .14.111.25.248.25a.25.25 0 0 0 .25-.25v-.622c-.001-.47-.002-.808.005-1.489a.75.75 0 0 1 .308-.6c.902-.656 2.496-1.812 3.956-2.87a16.04 16.04 0 0 0-11.77-5.974l-.002 13.123Z`,
  football: `M13.72 9.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l4.5-4.5Z" fill="#fff"/><path d="M17.75 2A4.25 4.25 0 0 1 22 6.25v1C22 15.396 15.396 22 7.25 22h-1A4.25 4.25 0 0 1 2 17.75v-1C2 8.604 8.604 2 16.75 2h1Zm2.75 4.25a2.75 2.75 0 0 0-2.75-2.75h-1c-.403 0-.802.018-1.196.053l4.893 4.893c.035-.394.053-.793.053-1.196v-1Zm-.347 4.024-6.427-6.427a13.27 13.27 0 0 0-9.902 9.977l6.352 6.352a13.269 13.269 0 0 0 9.977-9.902Zm-16.61 5.391c-.028.358-.043.72-.043 1.085v1a2.75 2.75 0 0 0 2.75 2.75h1c.365 0 .727-.015 1.085-.044l-4.791-4.791Z`,
  baseball: `M9.932 16.7s-.748.099-.91-.546a.758.758 0 0 1 .548-.91h.003l.007-.002.024-.006.08-.018c.07-.014.167-.034.29-.055.247-.043.599-.093 1.031-.126a12.54 12.54 0 0 1 3.392.2.75.75 0 0 1-.294 1.47 11.037 11.037 0 0 0-2.983-.175 9.66 9.66 0 0 0-1.123.153 5.18 5.18 0 0 0-.065.015ZM9.022 7.894c.161-.645.91-.546.91-.546a6.353 6.353 0 0 0 .297.059c.206.035.51.079.89.108a11.04 11.04 0 0 0 2.984-.175.75.75 0 0 1 .294 1.47 12.54 12.54 0 0 1-3.392.2 11.143 11.143 0 0 1-1.32-.18 4.577 4.577 0 0 1-.082-.018l-.023-.006-.007-.002H9.57a.758.758 0 0 1-.548-.91Z" fill="#fff"/><path d="M12 22a9.969 9.969 0 0 0 7.094-2.952A9.955 9.955 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10ZM5.074 7.071a7.916 7.916 0 0 0 1.939.966.75.75 0 1 0 .474-1.423 6.364 6.364 0 0 1-1.43-.691A8.472 8.472 0 0 1 12 3.5c2.313 0 4.41.924 5.943 2.423-.412.264-.89.51-1.43.69a.75.75 0 1 0 .474 1.424 7.916 7.916 0 0 0 1.939-.966A8.462 8.462 0 0 1 20.5 12a8.462 8.462 0 0 1-1.597 4.961 7.907 7.907 0 0 0-1.916-.95.75.75 0 1 0-.474 1.423c.527.175.996.414 1.4.672A8.472 8.472 0 0 1 12 20.5a8.472 8.472 0 0 1-5.913-2.394 6.35 6.35 0 0 1 1.4-.672.75.75 0 1 0-.474-1.423 7.91 7.91 0 0 0-1.916.95A8.461 8.461 0 0 1 3.5 12c0-1.838.583-3.539 1.574-4.929Z`,
  basketball: `M12.941 21.956a9.96 9.96 0 0 0 6.13-2.885c3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142a9.976 9.976 0 0 0 7.687 2.91.745.745 0 0 0 .325-.025ZM3.577 10.854a8.457 8.457 0 0 1 1.905-4.31L10.94 12l-1.088 1.088c-1.052-.85-2.224-1.308-3.341-1.608-.65-.174-1.296-.3-1.887-.413l-.016-.004c-.367-.07-.71-.137-1.03-.209Zm-.069 1.52c.266.056.535.108.8.16l.014.002c.603.117 1.202.233 1.799.393.953.256 1.861.616 2.662 1.228l-3.3 3.3a8.468 8.468 0 0 1-1.975-5.083Zm6.339 2.84c.675.862 1.04 1.806 1.297 2.773.125.47.221.928.318 1.392l.084.395c.05.24.105.481.165.721a8.469 8.469 0 0 1-5.168-1.977l3.304-3.304Zm3.393 5.196c-.082-.29-.154-.606-.228-.95l-.077-.367c-.098-.469-.205-.98-.341-1.492-.301-1.128-.762-2.337-1.68-3.454L12 13.061l5.457 5.457a8.455 8.455 0 0 1-4.217 1.892ZM13.06 12l1.212-1.211c1.114.942 2.28 1.46 3.365 1.826.447.152.897.282 1.311.403.159.046.313.09.46.134.35.106.671.208.964.321a8.453 8.453 0 0 1-1.854 3.984L13.06 12Zm6.777-.285-.502-.147a28.798 28.798 0 0 1-1.217-.374c-.944-.32-1.888-.74-2.781-1.47l3.18-3.181a8.472 8.472 0 0 1 1.983 5.382c-.22-.075-.443-.144-.663-.21Zm-2.38-6.233-3.181 3.181c-.73-.893-1.151-1.837-1.47-2.781-.141-.415-.257-.814-.374-1.218v-.001c-.05-.166-.097-.332-.148-.5-.066-.22-.134-.443-.209-.663a8.472 8.472 0 0 1 5.382 1.982Zm-6.073.88c.367 1.085.884 2.252 1.827 3.366L12 10.94 6.543 5.482a8.453 8.453 0 0 1 3.984-1.854c.113.293.215.613.32.964l.135.46c.12.414.25.863.402 1.31Z`,
  star: `M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-4.716-2.48-4.715 2.48c-.99.52-2.148-.32-1.96-1.424l.901-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777Zm1.21.936L9.74 8.615a1.35 1.35 0 0 1-1.016.738l-5.05.734 3.654 3.562c.318.31.463.757.388 1.195l-.862 5.03 4.516-2.375a1.35 1.35 0 0 1 1.257 0l4.516 2.374-.862-5.029a1.35 1.35 0 0 1 .388-1.195l3.654-3.562-5.05-.734a1.35 1.35 0 0 1-1.016-.738l-2.259-4.576Z`,
  heart: `m12.82 5.58-.82.822-.824-.824a5.375 5.375 0 1 0-7.601 7.602l7.895 7.895a.75.75 0 0 0 1.06 0l7.902-7.897a5.376 5.376 0 0 0-.001-7.599 5.38 5.38 0 0 0-7.611 0Zm6.548 6.54L12 19.485 4.635 12.12a3.875 3.875 0 1 1 5.48-5.48l1.358 1.357a.75.75 0 0 0 1.073-.012L13.88 6.64a3.88 3.88 0 0 1 5.487 5.48Z`,
  code: `m8.066 18.943 6.5-14.5a.75.75 0 0 1 1.404.518l-.036.096-6.5 14.5a.75.75 0 0 1-1.404-.518l.036-.096 6.5-14.5-6.5 14.5ZM2.22 11.47l4.25-4.25a.75.75 0 0 1 1.133.976l-.073.085L3.81 12l3.72 3.719a.75.75 0 0 1-.976 1.133l-.084-.073-4.25-4.25a.75.75 0 0 1-.073-.976l.073-.084 4.25-4.25-4.25 4.25Zm14.25-4.25a.75.75 0 0 1 .976-.073l.084.073 4.25 4.25a.75.75 0 0 1 .073.976l-.073.085-4.25 4.25a.75.75 0 0 1-1.133-.977l.073-.084L20.19 12l-3.72-3.72a.75.75 0 0 1 0-1.06Z`,
  palette: `M3.839 5.858c2.94-3.916 9.03-5.055 13.364-2.36 4.28 2.66 5.854 7.777 4.1 12.577-1.655 4.533-6.016 6.328-9.159 4.048-1.177-.854-1.634-1.925-1.854-3.664l-.106-.987-.045-.398c-.123-.934-.311-1.352-.705-1.572-.535-.298-.892-.305-1.595-.033l-.351.146-.179.078c-1.014.44-1.688.595-2.541.416l-.2-.047-.164-.047c-2.789-.864-3.202-4.647-.565-8.157Zm.984 6.716.123.037.134.03c.439.087.814.015 1.437-.242l.602-.257c1.202-.493 1.985-.54 3.046.05.917.512 1.275 1.298 1.457 2.66l.053.459.055.532.047.422c.172 1.361.485 2.09 1.248 2.644 2.275 1.65 5.534.309 6.87-3.349 1.516-4.152.174-8.514-3.484-10.789-3.675-2.284-8.899-1.306-11.373 1.987-2.075 2.763-1.82 5.28-.215 5.816Zm11.225-1.994a1.25 1.25 0 1 1 2.414-.647 1.25 1.25 0 0 1-2.414.647Zm.494 3.488a1.25 1.25 0 1 1 2.415-.647 1.25 1.25 0 0 1-2.415.647ZM14.07 7.577a1.25 1.25 0 1 1 2.415-.647 1.25 1.25 0 0 1-2.415.647Zm-.028 8.998a1.25 1.25 0 1 1 2.414-.647 1.25 1.25 0 0 1-2.414.647Zm-3.497-9.97a1.25 1.25 0 1 1 2.415-.646 1.25 1.25 0 0 1-2.415.646Z`,
  coffee: `M3.941 5C2.87 5 2 5.87 2 6.941V12a8 8 0 0 0 15.911 1.197h.738a3.349 3.349 0 0 0 0-6.697h-.7c-.2-.86-.97-1.5-1.89-1.5H3.94ZM3.5 6.941c0-.243.198-.441.441-.441H16.06c.243 0 .441.198.441.441V12a6.5 6.5 0 1 1-13 0V6.941ZM18 8h.649a1.849 1.849 0 1 1 0 3.697H18V8Z`,
  beer: `M8.5 10A.75.75 0 0 0 7 10v7a.75.75 0 0 0 1.5 0v-7ZM11.5 10a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0v-7ZM14.5 10a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0v-7Z" fill="#fff"/><path d="M4 5.25A3.25 3.25 0 0 1 7.25 2h7a3.25 3.25 0 0 1 3.25 3.25V6h1.25A3.25 3.25 0 0 1 22 9.25v5.5A3.25 3.25 0 0 1 18.75 18H17.5v1.75A2.25 2.25 0 0 1 15.25 22h-9A2.25 2.25 0 0 1 4 19.75V5.25ZM16 7.5H5.5v12.25c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V7.5Zm1.5 9h1.25a1.75 1.75 0 0 0 1.75-1.75v-5.5a1.75 1.75 0 0 0-1.75-1.75H17.5v9ZM16 5.25a1.75 1.75 0 0 0-1.75-1.75h-7A1.75 1.75 0 0 0 5.5 5.25V6H16v-.75Z`,
  smiley: `M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999Zm0 1.5a8.502 8.502 0 1 0 0 17.003A8.502 8.502 0 0 0 12 3.5ZM8.462 14.784A4.491 4.491 0 0 0 12 16.502a4.492 4.492 0 0 0 3.535-1.714.75.75 0 1 1 1.177.93A5.991 5.991 0 0 1 12 18.002a5.991 5.991 0 0 1-4.716-2.29.75.75 0 0 1 1.178-.928ZM9 8.75a1.25 1.25 0 1 1 0 2.499A1.25 1.25 0 0 1 9 8.75Zm6 0a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499Z`,
  bolt: `m8.294 14-1.767 7.068c-.187.746.736 1.256 1.269.701L19.79 9.27A.75.75 0 0 0 19.25 8h-4.46l1.672-5.013A.75.75 0 0 0 15.75 2h-7a.75.75 0 0 0-.721.544l-3 10.5A.75.75 0 0 0 5.75 14h2.544Zm4.745-5.487a.75.75 0 0 0 .711.987h3.74l-8.824 9.196 1.316-5.264a.75.75 0 0 0-.727-.932h-2.51l2.57-9h5.394l-1.67 5.013Z`,
  film: `m19.729 3.917.05.16.552 1.922a.75.75 0 0 1-.418.893l-.096.035L9.09 10.002h11.159a.75.75 0 0 1 .743.65l.007.1v8.499a2.75 2.75 0 0 1-2.583 2.745L18.25 22H5.75a2.75 2.75 0 0 1-2.745-2.582L3 19.25v-8.392l-.522-1.821a2.75 2.75 0 0 1 1.726-3.35l.16-.052 12.014-3.445a2.75 2.75 0 0 1 3.35 1.726Zm-.23 7.585H4.5v7.749c0 .604.429 1.108.998 1.224l.124.02.128.006H18.25a1.25 1.25 0 0 0 1.244-1.122l.006-.128v-7.749ZM6.272 6.649l-1.496.43a1.25 1.25 0 0 0-.886 1.42l.029.125.344 1.201.295-.085 1.714-3.09Zm4.756-1.363-2.717.779-1.714 3.09 2.718-.778 1.713-3.091Zm4.757-1.365-2.717.78-1.714 3.09 2.717-.778 1.714-3.092Zm1.848-.233-1.521 2.74 2.568-.737-.343-1.2a1.248 1.248 0 0 0-.704-.803Z`,
  puzzle: `M13 2.004a2.998 2.998 0 0 1 2.994 2.82l.005.175 2.25.001c.868 0 1.588.63 1.727 1.459l.018.148.006.143-.001 3.751h-1.998a1.5 1.5 0 0 0-1.48 1.24l-.015.132-.005.128a1.5 1.5 0 0 0 1.24 1.48l.132.015.128.005H20v3.752a1.75 1.75 0 0 1-1.606 1.744l-.143.006-2.251-.001-.004.173a3 3 0 0 1-2.638 2.802l-.18.016-.177.005a3 3 0 0 1-2.995-2.82L10 19.002H7.75a1.75 1.75 0 0 1-1.726-1.458l-.018-.148L6 17.253 5.999 15l-.163-.005a3 3 0 0 1-2.803-2.638l-.016-.18L3.012 12a3 3 0 0 1 2.824-2.995l.163-.005V6.75c0-.867.632-1.587 1.46-1.726l.147-.018L7.75 5l2.249-.001.006-.171a3 3 0 0 1 2.638-2.803l.18-.016.177-.005Zm0 1.5a1.5 1.5 0 0 0-1.493 1.356l-.007.145-.002 1.494L7.75 6.5a.25.25 0 0 0-.243.193L7.5 6.75l-.001 3.751H6.012a1.5 1.5 0 0 0-.144 2.993l.144.007H7.5v3.752a.25.25 0 0 0 .194.243l.057.007h3.748l.002 1.495a1.5 1.5 0 0 0 2.993.145L14.5 19l-.002-1.497h3.752a.25.25 0 0 0 .243-.192l.007-.057L18.499 15h-.523l-.18-.006a3.003 3.003 0 0 1-2.79-2.84l-.004-.178.006-.18a3 3 0 0 1 2.819-2.79L18 9.001h.498V6.75a.25.25 0 0 0-.13-.22l-.062-.023-.057-.007-3.752-.001.002-1.495a1.5 1.5 0 0 0-1.5-1.5Z`,
  shield: `M3 5.75A.75.75 0 0 1 3.75 5c2.663 0 5.258-.943 7.8-2.85a.75.75 0 0 1 .9 0C14.992 4.057 17.587 5 20.25 5a.75.75 0 0 1 .75.75V11c0 5.001-2.958 8.676-8.725 10.948a.75.75 0 0 1-.55 0C5.958 19.676 3 16 3 11V5.75Zm1.5.728V11c0 4.256 2.453 7.379 7.5 9.442 5.047-2.063 7.5-5.186 7.5-9.442V6.478c-2.577-.152-5.08-1.09-7.5-2.8-2.42 1.71-4.923 2.648-7.5 2.8Z`,
  soccer: `M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-1.926 1.72a8.526 8.526 0 0 1 3.852 0l-1.924 1.153-1.928-1.154Zm-1.83.653 3.008 1.8v2.193l-2.791 2.028-2.044-.707-.587-3.534a8.526 8.526 0 0 1 2.414-1.78ZM4.59 7.835l.358 2.157-1.428 1.428a8.449 8.449 0 0 1 1.07-3.585Zm-.968 5.604 2.327-2.327 2.04.705L9.07 15.15l-.97 1.575-3.293-.194a8.448 8.448 0 0 1-1.186-3.092Zm2.47 4.67 1.904.112.675 1.602a8.51 8.51 0 0 1-2.58-1.714Zm4.439 2.264-1.184-2.809.963-1.567h3.372l.912 1.581-1.04 2.78a8.554 8.554 0 0 1-3.023.015Zm4.83-.563.567-1.517 1.67.105a8.502 8.502 0 0 1-2.238 1.412Zm3.532-2.834-3.024-.19-.938-1.624 1.087-3.345 2.013-.696 2.312 2.52a8.459 8.459 0 0 1-1.45 3.335Zm1.598-5.391-1.44-1.57.362-2.178a8.45 8.45 0 0 1 1.078 3.748Zm-2.318-5.43-.589 3.534-2.04.705-2.791-2.028V6.172l3.002-1.8a8.528 8.528 0 0 1 2.418 1.784Zm-8.705 5.362 2.535-1.842 2.535 1.842-.968 2.98h-3.134l-.968-2.98Z`,
  person: `M17.754 14a2.249 2.249 0 0 1 2.25 2.249v.575c0 .894-.32 1.76-.902 2.438-1.57 1.834-3.957 2.739-7.102 2.739-3.146 0-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.435v-.577a2.249 2.249 0 0 1 2.249-2.25h11.501Zm0 1.5H6.253a.749.749 0 0 0-.75.749v.577c0 .536.192 1.054.54 1.461 1.253 1.468 3.219 2.214 5.957 2.214s4.706-.746 5.962-2.214a2.25 2.25 0 0 0 .541-1.463v-.575a.749.749 0 0 0-.749-.75ZM12 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z`,
  trophy: `M15.253 2a2.25 2.25 0 0 1 2.236 2h1.268A1.75 1.75 0 0 1 20.5 5.606l.006.144v3a3.25 3.25 0 0 1-3.066 3.245l-.21.006a5.758 5.758 0 0 1-4.731 3.95V17.5h1.753a3.25 3.25 0 0 1 3.244 3.066l.006.184v.5a.75.75 0 0 1-.649.743l-.101.007H6.75a.75.75 0 0 1-.744-.648L6 21.25v-.5a3.25 3.25 0 0 1 3.065-3.245l.185-.005H11v-1.549a5.758 5.758 0 0 1-4.729-3.95L6.245 12a3.25 3.25 0 0 1-3.25-3.25v-3c0-.966.784-1.75 1.75-1.75h1.268A2.25 2.25 0 0 1 8.25 2h7.003Zm-1 17H9.25a1.75 1.75 0 0 0-1.705 1.352l-.028.148h8.468a1.75 1.75 0 0 0-1.579-1.493L14.253 19Zm1-15.5H8.25a.75.75 0 0 0-.75.75v5.998a4.252 4.252 0 0 0 8.503 0V4.25a.75.75 0 0 0-.75-.75Zm3.504 2h-1.254v4.983A1.75 1.75 0 0 0 19 8.904l.007-.154v-3a.25.25 0 0 0-.193-.243l-.057-.007ZM6 5.5H4.745a.25.25 0 0 0-.25.25v3A1.75 1.75 0 0 0 6 10.483V5.5Z`,
};

export const DATA_ICON_CHECKBOX_FILLED = {
  checkbox_indeterminate: `M6.25 3C4.45507 3 3 4.45507 3 6.25V17.75C3 19.5449 4.45507 21 6.25 21H17.75C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H6.25ZM5 6.25C5 5.55964 5.55964 5 6.25 5H17.75C18.4404 5 19 5.55964 19 6.25V17.75C19 18.4404 18.4404 19 17.75 19H6.25C5.55964 19 5 18.4404 5 17.75V6.25ZM7.5 6.5C6.94772 6.5 6.5 6.94772 6.5 7.5V16.5C6.5 17.0523 6.94772 17.5 7.5 17.5H16.5C17.0523 17.5 17.5 17.0523 17.5 16.5V7.5C17.5 6.94772 17.0523 6.5 16.5 6.5H7.5Z`,
  checkbox_unchecked: `M3 6.25C3 4.45507 4.45507 3 6.25 3H17.75C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25ZM6.25 5C5.55964 5 5 5.55964 5 6.25V17.75C5 18.4404 5.55964 19 6.25 19H17.75C18.4404 19 19 18.4404 19 17.75V6.25C19 5.55964 18.4404 5 17.75 5H6.25Z`,
  checkbox_checked: `M6.25 3C4.45507 3 3 4.45508 3 6.25V17.75C3 19.5449 4.45508 21 6.25 21H17.75C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H6.25ZM17.28 9.28064L10.5263 16.0266C10.2333 16.3192 9.75868 16.319 9.46591 16.0262L6.72014 13.2803C6.42726 12.9874 6.42727 12.5125 6.72018 12.2196C7.01308 11.9268 7.48795 11.9268 7.78084 12.2197L9.99658 14.4356L16.22 8.21936C16.513 7.92664 16.9879 7.92691 17.2806 8.21998C17.5734 8.51304 17.5731 8.98791 17.28 9.28064Z`,
};

export const DATA_ICON_CHECKBOX_OUTLINED = {
  checkbox_indeterminate: `M6.25 3C4.45507 3 3 4.45507 3 6.25V17.75C3 19.5449 4.45507 21 6.25 21H17.75C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H6.25ZM4.5 6.25C4.5 5.2835 5.2835 4.5 6.25 4.5H17.75C18.7165 4.5 19.5 5.2835 19.5 6.25V17.75C19.5 18.7165 18.7165 19.5 17.75 19.5H6.25C5.2835 19.5 4.5 18.7165 4.5 17.75V6.25ZM7.25 6C6.55964 6 6 6.55964 6 7.25V16.75C6 17.4404 6.55964 18 7.25 18H16.75C17.4404 18 18 17.4404 18 16.75V7.25C18 6.55964 17.4404 6 16.75 6H7.25Z`,
  checkbox_unchecked: `M3 6.25C3 4.45507 4.45507 3 6.25 3H17.75C19.5449 3 21 4.45507 21 6.25V17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25ZM6.25 4.5C5.2835 4.5 4.5 5.2835 4.5 6.25V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5H6.25Z`,
  checkbox_checked: `M6.25 3C4.45507 3 3 4.45507 3 6.25V17.75C3 19.5449 4.45507 21 6.25 21H17.75C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H6.25ZM4.5 6.25C4.5 5.2835 5.2835 4.5 6.25 4.5H17.75C18.7165 4.5 19.5 5.2835 19.5 6.25V17.75C19.5 18.7165 18.7165 19.5 17.75 19.5H6.25C5.2835 19.5 4.5 18.7165 4.5 17.75V6.25ZM17.28 9.28064C17.5731 8.98791 17.5734 8.51304 17.2806 8.21998C16.9879 7.92691 16.513 7.92664 16.22 8.21936L9.99658 14.4356L7.78084 12.2197C7.48795 11.9268 7.01308 11.9268 6.72018 12.2196C6.42727 12.5125 6.42726 12.9874 6.72014 13.2803L9.46591 16.0262C9.75868 16.319 10.2333 16.3192 10.5263 16.0266L17.28 9.28064Z`,
};

export const DATA_ICON_RADIO_FILLED = {
  radio_checked: `M12 1.99902C17.5237 1.99902 22.0015 6.47687 22.0015 12.0006C22.0015 17.5243 17.5237 22.0021 12 22.0021C6.47626 22.0021 1.99841 17.5243 1.99841 12.0006C1.99841 6.47687 6.47626 1.99902 12 1.99902ZM12 3.49902C7.30469 3.49902 3.49841 7.3053 3.49841 12.0006C3.49841 16.6959 7.30469 20.5021 12 20.5021C16.6952 20.5021 20.5015 16.6959 20.5015 12.0006C20.5015 7.3053 16.6952 3.49902 12 3.49902ZM11.9965 5.99902C15.3092 5.99902 17.9946 8.68447 17.9946 11.9971C17.9946 15.3098 15.3092 17.9953 11.9965 17.9953C8.68386 17.9953 5.99841 15.3098 5.99841 11.9971C5.99841 8.68447 8.68386 5.99902 11.9965 5.99902Z`,
  radio_unchecked: `M12 22.0021C17.5237 22.0021 22.0015 17.5243 22.0015 12.0006C22.0015 6.47687 17.5237 1.99902 12 1.99902C6.47626 1.99902 1.99841 6.47687 1.99841 12.0006C1.99841 17.5243 6.47626 22.0021 12 22.0021ZM12 20.5021C7.30469 20.5021 3.49841 16.6959 3.49841 12.0006C3.49841 7.3053 7.30469 3.49902 12 3.49902C16.6952 3.49902 20.5015 7.3053 20.5015 12.0006C20.5015 16.6959 16.6952 20.5021 12 20.5021Z`,
  radio_checked_off: `M14.1462 14.854C14.2442 14.951 14.3722 15 14.5002 15V14.999C14.6283 14.999 14.7563 14.951 14.8542 14.853C15.0492 14.658 15.0492 14.341 14.8542 14.146L1.85325 1.14698C1.65825 0.951982 1.34125 0.951982 1.14625 1.14698C0.95125 1.34198 0.95125 1.65898 1.14625 1.85398L3.42524 4.13297C2.52912 5.17216 2.00049 6.52336 2.00049 8C2.00049 11.31 4.69049 14 8.00049 14C9.47713 14 10.8283 13.4714 11.8675 12.5752L14.1462 14.854ZM11.1638 11.8716C10.2983 12.5802 9.19747 13 8.00049 13C5.24049 13 3.00049 10.76 3.00049 8C3.00049 6.80301 3.42025 5.70222 4.12892 4.83665L5.5566 6.26433C5.20438 6.75418 5.00049 7.35357 5.00049 8.00002C5.00049 9.66002 6.34049 11 8.00049 11C8.64693 11 9.24633 10.7961 9.73617 10.4439L11.1638 11.8716ZM4.95049 2.83C5.84049 2.3 6.88049 2 8.00049 2C11.3105 2 14.0005 4.69 14.0005 8C14.0005 9.12 13.7005 10.16 13.1705 11.05L12.4305 10.31C12.8005 9.62 13.0005 8.83 13.0005 8C13.0005 5.24 10.7605 3 8.00049 3C7.17049 3 6.38049 3.2 5.69049 3.57L4.95049 2.83ZM10.8905 8.77C10.9605 8.53 11.0005 8.27 11.0005 8C11.0005 6.34 9.66047 5 8.00047 5C7.73047 5 7.47047 5.04 7.23047 5.11L10.8905 8.77Z`,
  radio_unchecked_off: `M1.85276 1.14723L14.8538 14.1462C15.0488 14.3412 15.0488 14.6582 14.8538 14.8532C14.7558 14.9512 14.6278 14.9992 14.4998 15.0002C14.3718 15.0002 14.2438 14.9512 14.1458 14.8542L11.8738 12.5822C10.8278 13.4662 9.47676 14.0002 7.99976 14.0002C4.68576 14.0002 1.99976 11.3142 1.99976 8.00023C1.99976 6.52323 2.53276 5.17123 3.41776 4.12623L1.14576 1.85423C0.950762 1.65923 0.950762 1.34223 1.14576 1.14723C1.34076 0.952227 1.65776 0.952227 1.85276 1.14723ZM2.99976 8.00023C2.99976 10.7612 5.23876 13.0002 7.99976 13.0002L7.99876 12.9992C9.19976 12.9992 10.3008 12.5762 11.1628 11.8712L4.12776 4.83623C3.42276 5.69823 2.99976 6.80023 2.99976 8.00023ZM13.0001 8.00027C13.0001 5.23927 10.7611 3.00027 8.00006 3.00027L7.99805 2.99827C7.16605 2.99827 6.39305 3.22127 5.70305 3.58127L4.95605 2.83427C5.84905 2.30727 6.88705 1.99927 7.99905 1.99927C11.3131 1.99927 13.9991 4.68527 13.9991 7.99927C13.9991 9.11127 13.6911 10.1493 13.1641 11.0423L12.4171 10.2953C12.7771 9.60527 13.0001 8.83227 13.0001 8.00027Z`,
};

export const DATA_ICON_RADIO_OUTLINED = {
  radio_checked: `M12 1.99902C17.5237 1.99902 22.0015 6.47687 22.0015 12.0006C22.0015 17.5243 17.5237 22.0021 12 22.0021C6.47626 22.0021 1.99841 17.5243 1.99841 12.0006C1.99841 6.47687 6.47626 1.99902 12 1.99902ZM12 3.49902C7.30469 3.49902 3.49841 7.3053 3.49841 12.0006C3.49841 16.6959 7.30469 20.5021 12 20.5021C16.6952 20.5021 20.5015 16.6959 20.5015 12.0006C20.5015 7.3053 16.6952 3.49902 12 3.49902ZM11.9965 5.99902C15.3092 5.99902 17.9946 8.68447 17.9946 11.9971C17.9946 15.3098 15.3092 17.9953 11.9965 17.9953C8.68386 17.9953 5.99841 15.3098 5.99841 11.9971C5.99841 8.68447 8.68386 5.99902 11.9965 5.99902Z`,
  radio_unchecked: `M12 22.0021C17.5237 22.0021 22.0015 17.5243 22.0015 12.0006C22.0015 6.47687 17.5237 1.99902 12 1.99902C6.47626 1.99902 1.99841 6.47687 1.99841 12.0006C1.99841 17.5243 6.47626 22.0021 12 22.0021ZM12 20.5021C7.30469 20.5021 3.49841 16.6959 3.49841 12.0006C3.49841 7.3053 7.30469 3.49902 12 3.49902C16.6952 3.49902 20.5015 7.3053 20.5015 12.0006C20.5015 16.6959 16.6952 20.5021 12 20.5021Z`,
  radio_checked_off: `M14.1462 14.854C14.2442 14.951 14.3722 15 14.5002 15V14.999C14.6283 14.999 14.7563 14.951 14.8542 14.853C15.0492 14.658 15.0492 14.341 14.8542 14.146L1.85325 1.14698C1.65825 0.951982 1.34125 0.951982 1.14625 1.14698C0.95125 1.34198 0.95125 1.65898 1.14625 1.85398L3.42524 4.13297C2.52912 5.17216 2.00049 6.52336 2.00049 8C2.00049 11.31 4.69049 14 8.00049 14C9.47713 14 10.8283 13.4714 11.8675 12.5752L14.1462 14.854ZM11.1638 11.8716C10.2983 12.5802 9.19747 13 8.00049 13C5.24049 13 3.00049 10.76 3.00049 8C3.00049 6.80301 3.42025 5.70222 4.12892 4.83665L5.5566 6.26433C5.20438 6.75418 5.00049 7.35357 5.00049 8.00002C5.00049 9.66002 6.34049 11 8.00049 11C8.64693 11 9.24633 10.7961 9.73617 10.4439L11.1638 11.8716ZM4.95049 2.83C5.84049 2.3 6.88049 2 8.00049 2C11.3105 2 14.0005 4.69 14.0005 8C14.0005 9.12 13.7005 10.16 13.1705 11.05L12.4305 10.31C12.8005 9.62 13.0005 8.83 13.0005 8C13.0005 5.24 10.7605 3 8.00049 3C7.17049 3 6.38049 3.2 5.69049 3.57L4.95049 2.83ZM10.8905 8.77C10.9605 8.53 11.0005 8.27 11.0005 8C11.0005 6.34 9.66047 5 8.00047 5C7.73047 5 7.47047 5.04 7.23047 5.11L10.8905 8.77Z`,
  radio_unchecked_off: `M1.85276 1.14723L14.8538 14.1462C15.0488 14.3412 15.0488 14.6582 14.8538 14.8532C14.7558 14.9512 14.6278 14.9992 14.4998 15.0002C14.3718 15.0002 14.2438 14.9512 14.1458 14.8542L11.8738 12.5822C10.8278 13.4662 9.47676 14.0002 7.99976 14.0002C4.68576 14.0002 1.99976 11.3142 1.99976 8.00023C1.99976 6.52323 2.53276 5.17123 3.41776 4.12623L1.14576 1.85423C0.950762 1.65923 0.950762 1.34223 1.14576 1.14723C1.34076 0.952227 1.65776 0.952227 1.85276 1.14723ZM2.99976 8.00023C2.99976 10.7612 5.23876 13.0002 7.99976 13.0002L7.99876 12.9992C9.19976 12.9992 10.3008 12.5762 11.1628 11.8712L4.12776 4.83623C3.42276 5.69823 2.99976 6.80023 2.99976 8.00023ZM13.0001 8.00027C13.0001 5.23927 10.7611 3.00027 8.00006 3.00027L7.99805 2.99827C7.16605 2.99827 6.39305 3.22127 5.70305 3.58127L4.95605 2.83427C5.84905 2.30727 6.88705 1.99927 7.99905 1.99927C11.3131 1.99927 13.9991 4.68527 13.9991 7.99927C13.9991 9.11127 13.6911 10.1493 13.1641 11.0423L12.4171 10.2953C12.7771 9.60527 13.0001 8.83227 13.0001 8.00027Z`,
};

export const DATA_AVATAR_ICONS: Avatar[] = [ 'baseball', 'basketball', 'beer', 'bolt', 'code', 'coffee', 'dog', 'film', 'football', 'heart', 'music', 'palette', 'person', 'pizza', 'puzzle', 'robot', 'shield', 'smiley', 'soccer', 'star', 'trophy'];

export const DATA_ICON_LOOKUP = {
  filled: {
    ...DATA_ICON_RADIO_FILLED,
    ...DATA_ICON_AVATAR_FILLED,
    ...DATA_ICON_CHECKBOX_FILLED
  },
  outlined: {
    ...DATA_ICON_RADIO_OUTLINED,
    ...DATA_ICON_AVATAR_OUTLINED,
    ...DATA_ICON_CHECKBOX_OUTLINED
  },
};

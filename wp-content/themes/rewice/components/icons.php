<?php function Icons($type){ 
  switch($type){
    case 'tel':?>
      <svg width="30" height="30">
        <path d="M25.286,18.427l-6.525-.755-3.12,3.12a18.628,18.628,0,0,1-8.159-8.159L10.614,9.5,9.859,3H3.037A21.049,21.049,0,0,0,25.286,25.249V18.427Z"/>
      </svg>
    <?php break;
    case 'mail':?>
      <svg width="30" height="30">
        <path d="M26.762,4H2V23.81H26.762ZM24.286,8.952l-9.9,6.191-9.9-6.191V6.476l9.9,6.191,9.9-6.191Z" />
      </svg>
    <?php break;
    case 'toggler':?>
    <svg width="32" height="32" class="nav__toggler--icon">
				<rect width="32" height="3" x="8" y="6" class="nav__toggler--rect"/>
				<rect width="32" height="3" y="14" class="nav__toggler--rect"/>
				<rect width="32" height="3" x="8" y="22" class="nav__toggler--rect"/>
			</svg>
    <?php break;
    case 'address':?>
    <svg width="30" height="30" viewBox="0 0 30 30">
      <rect width="30" height="30" transform="translate(0.107 0.107)" fill="none"/>
      <path d="M26.562,12.1V4.445H22.227V8.2L16.448,3,2,16H6.334V27.562h7.224V18.893h5.779v8.669h7.224V16H30.9Zm-13,1.011a2.89,2.89,0,1,1,5.779,0Z" transform="translate(-2 -3)"/>
    </svg>
    <?php break;
    default: null;
  }
};
?>
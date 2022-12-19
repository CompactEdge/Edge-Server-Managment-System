
var Main = {
	menu : {
		icon : {
			default : {
				dashboard : "/assets/source/EdgeService1.png",
				storage : "/assets/source/StorageModule1.png",
				physical : "/assets/source/EdgeService1.png",
				cluster : "/assets/source/Cluster1.png",
				virtual : "/assets/source/Resource1.png",
				edge : "/assets/source/EdgeService1.png"
			},
			active : {
				dashboard : "/assets/source/EdgeService.png",
				storage : "/assets/source/StorageModule.png",
				physical : "/assets/source/EdgeService.png",
				cluster : "/assets/source/Cluster.png",
				virtual : "/assets/source/Resource.png",
				edge : "/assets/source/EdgeService.png"
			}
		},
		eng : {
			dashboard : {
				title : "Dashboard"
			},
			storage : {
				title : "Monitoring",
				step1 : "Edge Monitoring",
				step2 : "Cluster Monitoring",
				step3 : "Node Monitoring",
				step4 : "Pod Monitoring",
				step5 : "Controller Monitoring",
				step6 : "Storage Monitoring",
				step7 : "Service Monitoring"
			},
			management : {
				title : "Management",
				step1 : "Pod List",
				step2 : "Deployment List",
				step3 : "Service List",
				step4 : "Chassis Module"
			},
			physical : {
				title : "Management",
				step1 : "Create Pod",
				step2 : "Create Deployment",
				step3 : "Create Service"
			},
			cluster : {
				title : "External Cloud",
				step1 : "AWS",
				step2 : "Azure",
				step3 : "GCP",
				step4 : "Naver"
			},
			virtual : {
				title : "Virtual Resource",
				step1 : "Orchestration",
				step2 : "VIM"
			},
			edge : {
				title : "Edge Service",
				step1 : "BigCrawler"
			}			
		},
		kor : {
			dashboard : {
				title : "대시보드"
			},
			storage : {
				title : "스토리지 모듈 관리",
				step1 : "스토리지 상태",
				step2 : "스토리지 노드",
				step3 : "NVMe 저장소"
			},
			physical : {
				title : "Physical Node",
				step1 : "Node Status",
				step2 : "System Info",
				step3 : "Power Management",
				step4 : "Temperature Info"
			},
			cluster : {
				title : "클러스터",
				step1 : "클러스터 현황",
				step2 : "서비스 현황",
				step3 : "Messages",
				step4 : "컨테이너 배포",
				step5 : "외부 클라우드 연결 관리"
			},
			virtual : {
				title : "가상자원 관리",
				step1 : "통계 정보",
				step2 : "VIM"
			},
			edge : {
				title : "Edge 서비스",
				step1 : "BigCrawler",
				step2 : "HeteroAccel",
				step3 : "CollabOffloading",
				step4 : "TeleSense"
			}			
		}
	}
};

Main.LoadMenu = function(type, step){
	var menu = $("#ul_menu");	
	menu.empty();
	
	menu.append('<li class="menu">Menu</li>');
	menu.append(Main.Menu_Dashboard());
	menu.append(Main.Menu_Storage());
	menu.append(Main.Menu_Management());
	//menu.append(Main.Menu_Physical());
	//menu.append(Main.Menu_Cluster());
	//menu.append(Main.Menu_Virtual());
	menu.append(Main.Menu_Edge());
	
	Main.setActive(type, step);
	
	Main.INIT_EVENT();
};

Main.setActive = function(type, step = null){

	
	var title_li = $(".li-" + type + "-title");
	title_li.addClass("active-page");
	var img = title_li.data("img");
	
	var title_a = title_li.find("a:eq(0)");
	
	if(title_a.length > 0){
		title_a.attr("href", "#");
		title_a.find("img:eq(0)").attr("src", img);
	}
	
	if(step){
		var li = $(".li-" + type + "-" + step);
		li.addClass("active-page-in");
		li.find("a:eq(0)").attr("href", "#");
	}
};

Main.INIT_EVENT = function(){
  $(".side-bar ul ul").hide();
  $(".side-bar > ul > li > a").click(function() {
    $(this).next().slideToggle(300);
    $(".side-bar > ul > li > a").not(this).next().slideUp(300);
  });
  
  $(".side-bar > ul > li.active-page > ul").show();
  
  $(".side-bar > ul > li > a").click(function() {
        if ($(this).hasClass('active')){
          $(this).removeClass('active');
        }
        else{
          $(".side-bar > ul > li > a").removeClass('active');
          $(this).toggleClass('active');
        }
  });
};


Main.createTitle = function(title, img_default, img_active, link, cls){
	var title_li = $("<li class='" + cls + "'/>");
	var title_a = $("<a href='" + link + "'/>");
	var title_img = $("<img src='" + img_default + "'>");
	var title_title = $("<span>" + title + "</span>");
		
	title_a.append(title_img);
	title_a.append(title_title);
	
	title_li.append(title_a);
	
	title_li.data("img", img_active);
	
	return title_li;
};

Main.createChild = function(title, link, cls){
	var title_li = $("<li class='" + cls + "'/>");
	var title_a = $("<a href='" + link + "'>" + title + "</a>");
	
	title_li.append(title_a);
	
	return title_li;
};

Main.Menu_Dashboard = function(){
	var menustr = Main.menu.eng.dashboard;
	
	var title_li = Main.createTitle(menustr.title, 
		Main.menu.icon.default.dashboard,
		Main.menu.icon.active.dashboard,
		"/index.html",
		"li-dashboard-title");
		
		
	return title_li;
	
};

Main.Menu_Storage = function(){
	var menustr = Main.menu.eng.storage;
	
	var title_li = Main.createTitle(menustr.title, 
		Main.menu.icon.default.storage,
		Main.menu.icon.active.storage,
		"#",
		"li-storage-title");
	
	var ul = $("<ul/>");
	
	//ul.append(Main.createChild(menustr.step1, "/html/storage/storage-status.html", "li-storage-status"));
	//ul.append(Main.createChild(menustr.step2, "/html/storage/storage-node.html", "li-storage-node"));
	//ul.append(Main.createChild(menustr.step3, "/html/storage/nvme-storage.html", "li-storage-nvme"));
	
	
	ul.append(Main.createChild(menustr.step1, "/html/storage/edgemonitoring.html", "li-edgemonitoring"));
	ul.append(Main.createChild(menustr.step2, "/html/storage/clustermonitoring.html", "li-clustermonitoring"));
	ul.append(Main.createChild(menustr.step3, "/html/storage/nodemonitoring.html", "li-nodemonitoring"));
	ul.append(Main.createChild(menustr.step4, "/html/storage/podmonitoring.html", "li-podmonitoring"));
	ul.append(Main.createChild(menustr.step5, "/html/storage/controllermonitoring.html", "li-controllermonitoring"));
	ul.append(Main.createChild(menustr.step6, "/html/storage/storagemonitoring.html", "li-storagemonitoring"));
	ul.append(Main.createChild(menustr.step7, "/html/storage/servicemonitoring.html", "li-servicemonitoring"));
	
	title_li.append(ul);
		
	return title_li;	
	
};


Main.Menu_Management = function(){
	var menustr = Main.menu.eng.management;
	
	var title_li = Main.createTitle(menustr.title, 
		Main.menu.icon.default.physical,
		Main.menu.icon.active.physical,
		"#",
		"li-physical-title");
	
	var ul = $("<ul/>");
	
	ul.append(Main.createChild(menustr.step1, "/html/management/createpod.html", "li-management-pod"));
	ul.append(Main.createChild(menustr.step2, "/html/management/createdepolyment.html", "li-management-deployment"));
	ul.append(Main.createChild(menustr.step3, "/html/management/createservice.html", "li-physical-service"));
	ul.append(Main.createChild(menustr.step4, "/html/management/chassismodule.html", "li-physical-chassismodule"));

	
	title_li.append(ul);
		
	return title_li;	
	
};

Main.Menu_Physical = function(){
	var menustr = Main.menu.eng.physical;
	
	var title_li = Main.createTitle(menustr.title, 
		Main.menu.icon.default.physical,
		Main.menu.icon.active.physical,
		"#",
		"li-physical-title");
	
	var ul = $("<ul/>");
	
	ul.append(Main.createChild(menustr.step1, "/html/physical/node-status.html", "li-physical-node"));
	ul.append(Main.createChild(menustr.step2, "/html/physical/system-info.html", "li-physical-system"));
	ul.append(Main.createChild(menustr.step3, "/html/physical/power-management.html", "li-physical-power"));
	ul.append(Main.createChild(menustr.step4, "/html/physical/temperature-info.html", "li-physical-temperature"));
	
	title_li.append(ul);
		
	return title_li;	
	
};

Main.Menu_Cluster = function(){
	var menustr = Main.menu.eng.cluster;
	
	var title_li = Main.createTitle(menustr.title, 
		Main.menu.icon.default.cluster,
		Main.menu.icon.active.cluster,
		"#",
		"li-cluster-title");
	
	var ul = $("<ul/>");	
	
	ul.append(Main.createChild(menustr.step1, "/html/external/aws.html", "li-external-aws"));
	ul.append(Main.createChild(menustr.step2, "/html/external/azure.html", "li-external-azure"));
	ul.append(Main.createChild(menustr.step3, "/html/external/gcp.html", "li-external-gcp"));
	ul.append(Main.createChild(menustr.step4, "/html/external/naver.html", "li-external-naver"));
		
	title_li.append(ul);
		
	return title_li;	
	
};

Main.Menu_Cluster_old = function(){
	var menustr = Main.menu.eng.cluster;
	
	var title_li = Main.createTitle(menustr.title, 
		Main.menu.icon.default.cluster,
		Main.menu.icon.active.cluster,
		"#",
		"li-cluster-title");
	
	var ul = $("<ul/>");	
	
	ul.append(Main.createChild(menustr.step1, "/html/cluster/cluster-status.html", "li-cluster-cluster"));
	ul.append(Main.createChild(menustr.step2, "/html/cluster/service-status.html", "li-cluster-service"));
	ul.append(Main.createChild(menustr.step3, "/html/cluster/messages.html", "li-cluster-messages"));
	ul.append(Main.createChild(menustr.step4, "/html/cluster/container-distribution.html", "li-cluster-container"));
	ul.append(Main.createChild(menustr.step5, "/html/cluster/external-cloud-connection.html", "li-cluster-external"));
	
	title_li.append(ul);
		
	return title_li;	
	
};

Main.Menu_Virtual = function(){
	var menustr = Main.menu.eng.virtual;
	
	var title_li = Main.createTitle(menustr.title, 
		Main.menu.icon.default.virtual,
		Main.menu.icon.active.virtual,
		"#",
		"li-virtual-title");
	
	var ul = $("<ul/>");
	
	ul.append(Main.createChild(menustr.step1, "/html/virtual/resource-orchestrator.html", "li-virtual-orchestrator"));
	ul.append(Main.createChild(menustr.step2, "/html/virtual/resource-vim.html", "li-virtual-vim"));
	
	title_li.append(ul);
		
	return title_li;	
	
};

Main.Menu_Edge = function(){
	var menustr = Main.menu.eng.edge;
	
	var title_li = Main.createTitle(menustr.title, 
		Main.menu.icon.default.edge,
		Main.menu.icon.active.edge,
		"#",
		"li-edge-title");
	
	var ul = $("<ul/>");
	
	ul.append(Main.createChild(menustr.step1, "/html/edge/big-crawler.html", "li-edge-big"));
	//ul.append(Main.createChild(menustr.step2, "/html/edge/hetero-accel.html", "li-edge-hetero"));
	//ul.append(Main.createChild(menustr.step3, "/html/edge/collab-offloading.html", "li-edge-collab"));
	//ul.append(Main.createChild(menustr.step4, "/html/edge/tele-sense.html", "li-edge-tele"));
	
	title_li.append(ul);
		
	return title_li;	
	
};


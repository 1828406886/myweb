<?php
namespace Admin\Controller;
use Admin\Controller;

class IndexController extends BaseController{

    public function index(){

    	$member = M('member')->count();
    	$post = M('post')->count();
    	$links = M('links')->count();
    	$advert = M('advert')->count();
    	$this->assign('member',$member);
    	$this->assign('post',$post);
    	$this->assign('links',$links);
    	$this->assign('advert',$advert);
        $this->display();
    }
}

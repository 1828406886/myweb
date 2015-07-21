<?php
namespace Admin\Model;
use Think\Model;
class AdvertModel extends Model{
    protected $_validate = array(
        array('title','require','请填写广告标题！'), //默认情况下用正则进行验证
        array('url','require','请填写广告！'), //默认情况下用正则进行验证
        array('url','url','链接格式错误'), //默认情况下用正则进行验证
        array('sort','require','请填写优先级'), //默认情况下用正则进行验证
        array('sort','number','优先级必须为整数'), //默认情况下用正则进行验证
    );
}
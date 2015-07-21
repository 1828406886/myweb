<?php
namespace Admin\Controller;
use Think\Controller;

/**
* 广告管理
*/
class AdvertController extends BaseController
{
	
	/**
	 * 广告列表
	 * @param  string $key [description]
	 * @return [type]        [description]
	 */
	public function index($key='')
	{
		if ($key == "" ) {
			$model = M('advert');
		}else{
			$where['title'] = array('like',"%$key%");
            $where['url'] = array('like',"%$key%");
            $where['_logic'] = 'or';
            $model = M('advert')->where($where);
		}
		$count  = $model->where($where)->count();// 查询满足要求的总记录数
        $Page = new \Extend\Page($count,15);// 实例化分页类 传入总记录数和每页显示的记录数(25)
        $show = $Page->show();// 分页显示输出
        $links = $model->limit($Page->firstRow.','.$Page->listRows)->where($where)->order('id DESC')->select();
        $this->assign('model', $links);
        $this->assign('page',$show);
        $this->display();   
	}


	/**
     * 添加广告
     */
    public function add()
    {
        //默认显示添加表单
        if (!IS_POST) {
            $this->display();
        }
        if (IS_POST) {
            //如果用户提交数据
            $model = D("advert");
            if (!$model->create()) {
                // 如果创建失败 表示验证没有通过 输出错误提示信息
                $this->error($model->getError());
                exit();
            } else {
                if ($model->add()) {
                    $this->success("广告添加成功", U('advert/index'));
                } else {
                    $this->error("广告添加失败");
                }
            }
        }
    }


    /**
     * 更新广告信息
     * @param  [type] $id [广告ID]
     * @return [type]     [description]
     */
    public function update($id)
    {
        //默认显示添加表单
        if (!IS_POST) {
            $model = M('advert')->where('id='.$id)->find();
            $this->assign('model',$model);
            $this->display();
        }
        if (IS_POST) {
            $model = D("advert");
            if (!$model->create()) {
                $this->error($model->getError());
            }else{
                if ($model->save()) {
                    $this->success("更新成功", U('links/index'));
                } else {
                    $this->error("更新失败");
                }        
            }
        }
    }


    /**
     * 删除广告
     * @param  [type] $id [description]
     * @return [type]     [description]
     */
    public function delete($id)
    {
        $model = M('advert');
        $result = $model->delete($id);
        if($result){
            $this->success("广告删除成功", U('advert/index'));
        }else{
            $this->error("广告删除失败");
        }
    }

}
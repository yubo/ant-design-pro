package routes

import (
	"net/http"

	"examples/rest/api"
	"examples/rest/models"

	"github.com/yubo/apiserver/pkg/rest"
	"github.com/yubo/apiserver/plugin/responsewriter/umi"
)

type route struct {
	models.User
}

func InstallUser(http rest.GoRestfulContainer) {
	r := &route{models.NewUser()}

	rest.SwaggerTagRegister("user", "user Api - for restful sample")

	rest.WsRouteBuild(&rest.WsOption{
		Path:               "/api/v1",
		Produces:           []string{rest.MIME_JSON},
		Consumes:           []string{rest.MIME_JSON},
		Tags:               []string{"user"},
		RespWriter:         umi.RespWriter,
		GoRestfulContainer: http,
		Routes: []rest.WsRoute{{
			Method:    "POST",
			SubPath:   "/users",
			Operation: "createUser",
			Desc:      "create user",
			Handle:    r.createUser,
		}, {
			Method:    "GET",
			SubPath:   "/users",
			Operation: "listUser",
			Desc:      "list user",
			Handle:    r.listUser,
		}, {
			Method:    "GET",
			SubPath:   "/users/{name}",
			Operation: "getUser",
			Desc:      "get user by name",
			Handle:    r.getUser,
		}, {
			Method:    "PUT",
			SubPath:   "/users/{name}",
			Operation: "updateUser",
			Desc:      "update user",
			Handle:    r.updateUser,
		}, {
			Method:    "DELETE",
			SubPath:   "/users/{name}",
			Operation: "deleteUser",
			Desc:      "delete user",
			Handle:    r.deleteUser,
		}},
	})
}

func (p *route) createUser(w http.ResponseWriter, req *http.Request, _ *rest.NonParam, in *api.CreateUserInput) (*api.User, error) {
	return p.Create(req.Context(), in.User())
}

func (p *route) getUser(w http.ResponseWriter, req *http.Request, in *api.GetUserInput) (*api.User, error) {
	return p.Get(req.Context(), in.Name)
}

// default styles
func (p *route) listUser(w http.ResponseWriter, req *http.Request, in *api.ListInput) (ret *api.ListUserOutput, err error) {
	ret = &api.ListUserOutput{}

	var total int64
	opts, err := in.ListOptions(in.Query, &total)
	if err != nil {
		return nil, err
	}

	list, err := p.List(req.Context(), *opts)
	if err != nil {
		return nil, err
	}

	return &api.ListUserOutput{
		List:        list,
		CurrentPage: in.GetCurPage(),
		PageSize:    in.GetPageSize(),
		Total:       total,
	}, nil
}

func (p *route) updateUser(w http.ResponseWriter, req *http.Request, param *api.UpdateUserParam, in *api.UpdateUserInput) (*api.User, error) {
	in.Name = param.Name
	return p.Update(req.Context(), in)
}

func (p *route) deleteUser(w http.ResponseWriter, req *http.Request, in *api.DeleteUserInput) (*api.User, error) {
	return p.Delete(req.Context(), in.Name)
}
